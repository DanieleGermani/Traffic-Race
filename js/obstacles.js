function Obstacles() {
  this.positionX = this.getRandomPositionX();
  this.positionY = -100;
  this.speed = 3;
  this.osbstacleNumber = 0;
  this.obstacleId = []; 
  this.drawObstacles();
  this.moveObstacles();

  console.log(this);

}


Obstacles.prototype.getRandomPositionX = function() {
  return Math.floor(Math.random() * 320);
};

Obstacles.prototype.drawObstacles = function() {

  console.log(this.osbstacleNumber);
  var obstacle = $('<img src="img/car2.png" width="40px">').addClass("obstacles").css({
    top: this.positionY,
    left: this.positionX
  }).attr("id", "obstacles" + this.osbstacleNumber);
  /*var obstacle1 = $('<img class="carOb" src="img/car3.png" width="40px">').addClass("obstacles").css({
    top: this.positionY,
    left: this.positionX
  });*/

  //var obstacles = [obstacle1, obstacle2];
  $('#board').append(obstacle);
  this.obstacleId.push("obstacles" + this.obstacleNumber);



};

Obstacles.prototype.moveObstacles = function() {
  var that = this;

  var intervalId = setInterval(function() {
    //console.log("entro a move");
    var obstaclesArray = $('.obstacles');
    for (var i = 0; i < obstaclesArray.length; i++) {
      var x = $("#" + obstaclesArray[i].id).position().top;
      if (x < 650) {

        $(".obstacles").css({
          top: x += 5
        });
      } else {
        $("#" + obstaclesArray[i].id).remove();

      }
    }


  }, 200);

};
