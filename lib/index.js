require('../main.css')

const Character = require('./character')
const canvas    = document.getElementById('game-canvas');
const context   = canvas.getContext("2d");

context.fillStyle = "blanchedalmond";
context.fillRect(0, 0, 600, 600);

let character = new Character();

function drawSprite(){
  context.fillStyle = "green";
  context.fillRect(character.x, character.y, character.width, character.height);
}

drawSprite();
function moveUpSprite(){

}
document.addEventListener
