function Character(){
  this.x = 150;
  this.y = 150;
  this.width = 30;
  this.height = 50;
};

Character.prototype.moveRight = function(){
  this.x ++;
};

Character.prototype.moveLeft = function(){
  this.x --;
};

Character.prototype.moveUp = function(){
  this.y --;
};

Character.prototype.moveDown = function(){
  this.y ++;
};

module.exports = Character;
