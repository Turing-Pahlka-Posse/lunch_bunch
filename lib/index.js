require('../main.css')

const canvas  = document.getElementById('game-canvas');
const context = canvas.getContext("2d");

context.fillStyle = "blanchedalmond";
context.fillRect(0, 0, 600, 600);

function drawSprite(){
  context.fillStyle = "green";
  context.fillRect(150, 150, 30, 50);
}

let character = drawSprite();

function moveUpSprite(){
  
}
document.addEventListener
