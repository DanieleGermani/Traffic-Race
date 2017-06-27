var board = new Board();
function Board() {
}

Board.prototype.createObstacles = function(){
  var intervalId = setInterval(function () {
    var obstacle = new Obstacles();
  }, 18000);
  setInterval(function () {
    var obstacle1 = new Obstacles();
  }, 5000);
  setInterval(function () {
    var obstacle2 = new Obstacles();
  }, 12000);


};
$( ".c-button .btn-start" ).click(function() {
  alert( "Handler for .click() called." );



  board.createObstacles();
});


Board.prototype.start = function(){

};


Board.prototype.checkGame = function(){
};




Board.prototype.restart = function(){
};

Board.prototype.gameOver = function(){
};
