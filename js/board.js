
function Board() {

}

Board.prototype.createObstacles = function(){
  var obstacle = new Obstacles();
  obstacle.drawObstacle();
  obstacle.moveObstacles();
  obstacle.checkObstacles();
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

};

Board.prototype.start = function(){
};
Board.prototype.checkGame = function(){
};
Board.prototype.restart = function(){
};
Board.prototype.gameOver = function(){
};
