function Obstacles() {
  this.positionX = this.getRandomPositionX();
  this.positionY = -100;
  this.speed = 2;
  //this.getRandomNumber();
  this.drawObstacles();
  this.moveObstacles();
  console.log(this);

}


Obstacles.prototype.getRandomPositionX = function() {
  return Math.floor(Math.random() * 360);
};

Obstacles.prototype.drawObstacles = function() {
  var obstacle1 = $('<img class="carOb" src="img/car2.png" width="40px">').addClass("obstacles").css({
    top: this.positionY,
    left: this.positionX
  });

  var obstacle2 = $('<img class="carOb" src="img/car3.png" width="40px">').addClass("obstacles").css({
    top: this.positionY,
    left: this.positionX
  });

  var obstacles = [obstacle1, obstacle2];
  $('#board').append(obstacles[Math.floor(Math.random() * obstacles.length)]);



};
Obstacles.prototype.clearObstacles = function() {
  $('#board .carOb ').remove();

};

Obstacles.prototype.moveObstacles = function() {
  var that = this;
  console.log(that);
  setInterval(function() {
    intervalId = setInterval(function() {
      if (that.positionY < 650) {
        $(".obstacles").css({
          top: that.positionY += 1
        });
      }
    }, 2000);
  });

};
//Obstacles.prototype.moveObstacles();
