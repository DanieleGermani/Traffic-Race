var board = new Board();
var player = new Player();
var time = new TimerCount();



function Game() {
}

Game.prototype.removeObstacle = function() {
  this.gameObstacle.shift();
};

$( "#start" ).click(function() {
  var game = new Game ();
  console.log("okokokokokkokokok");
  board.createObstacles();
  time._checkTimer();
  player.movementPlayer();



});
