
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
  }, 2000);
  setTimeout(function(){
     var obstacle3 = new Obstacles();
     obstacle3.drawObstacle();
     obstacle3.moveObstacles();
   }, 4000);
  setTimeout(function(){
   var obstacle4 = new Obstacles();
    obstacle4.drawObstacle();
    obstacle4.moveObstacles();
  }, 6000);
  setTimeout(function(){
   var obstacle5 = new Obstacles();
    obstacle5.drawObstacle();
    obstacle5.moveObstacles();
  }, 8000);
  setTimeout(function(){
   var obstacle6 = new Obstacles();
    obstacle6.drawObstacle();
    obstacle6.moveObstacles();
  }, 10000);
  setTimeout(function(){
   var obstacle7 = new Obstacles();
    obstacle7.drawObstacle();
    obstacle7.moveObstacles();
  }, 10000);


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
