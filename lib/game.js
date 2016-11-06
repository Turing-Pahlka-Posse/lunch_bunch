require ('./character')

function Game(character){
  this.character = character;
}

Game.prototype.checkEdge = function(){
  if(this.character.x > 600){
    this.character.x = 0;
  }
  if(this.character.x < 0){
    this.character.x = 600;
  }
}

Game.prototype.collisionDetection = function(){
  if(this.character.x >= 500 && this.character.y <= 100 ){
    console.log('hit box')
    
  }
}

module.exports = Game;