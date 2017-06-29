var board = new Board();
var player = new Player();
var time = new TimerCount();



function Game() {
}



$( "#start" ).click(function() {
  var game = new Game ();
  //console.log("okokokokokkokokok");
  board.createObstacles();
  time._checkTimer();
  player.movementPlayer1();
  player.movementPlayer2();
  board.moveLine();
  checkObstacles();

});
