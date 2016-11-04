require('../main.css')

const Character = require('./character')
const Game = require('./game')
const canvas    = document.getElementById('game-canvas');
const context   = canvas.getContext("2d");

function drawCanvas(){
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "blanchedalmond";
  context.fillRect(0, 0, canvas.width, canvas.height);
}

let character = new Character();
let game = new Game(character);

function drawSprite(){
  context.fillStyle = "green";
  context.fillRect(character.x, character.y, character.width, character.height);
}

function drawPortal(){
  context.fillStyle = "papayawhip";
  context.fillRect(500, 0, 100, 100);
}

document.addEventListener("keydown", function(event){
  if (event.keyCode === 39){
    character.moveRight();
  }
  if (event.keyCode === 37){
    character.moveLeft();
  }
  if (event.keyCode === 38){
    character.moveUp();
  }
  if (event.keyCode === 40){
    character.moveDown();
  }
})




requestAnimationFrame(function gameLoop(){
  drawCanvas();
  drawSprite();
  drawPortal();
  game.checkEdge();
  game.collisionDetection();
  requestAnimationFrame(gameLoop);
})
