function Character(){
  this.x = 150;
  this.y = 150;
  this.width = 30;
  this.height = 50;
  this.speed = 10;
};

Character.prototype.moveRight = function(){
  this.x += this.speed;
};

Character.prototype.moveLeft = function(){
  this.x -= this.speed;
};

Character.prototype.moveUp = function(){
  this.y -= this.speed;
};

Character.prototype.moveDown = function(){
  this.y += this.speed;
};

module.exports = Character;
