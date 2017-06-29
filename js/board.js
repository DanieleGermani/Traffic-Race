
function Board() {

}

Board.prototype.createObstacles = function(){
  var obstacle = new Obstacles();
  obstacle.drawObstacle();
  obstacle.moveObstacles();
  setTimeout(function(){
    var obstacle2 = new Obstacles();
    obstacle2.drawObstacle();
    obstacle2.moveObstacles();
  }, 3000);
  setTimeout(function(){
     var obstacle3 = new Obstacles();
     obstacle3.drawObstacle();
     obstacle3.moveObstacles();
   }, 5000);
  setTimeout(function(){
   var obstacle4 = new Obstacles();
    obstacle4.drawObstacle();
    obstacle4.moveObstacles();
  }, 7000);
  setTimeout(function(){
   var obstacle4 = new Obstacles();
    obstacle5.drawObstacle();
    obstacle5.moveObstacles();
  }, 6000);

};
Board.prototype.moveLine = function() {
  var linePos1 = $('.line').position().top;
  var intervalLine1 = setInterval(function() {
    if (linePos1 < 650) {
      var speed = 25;
      $('.line').css({
        top: linePos1 += speed
      });
    } else {
      $(".line").css({
        top: linePos1 = -80,
      });

    }

  }, 40);
};




Board.prototype.start = function(){
};
Board.prototype.checkGame = function(){
};
Board.prototype.restart = function(){
};
Board.prototype.gameOver = function(){
};
