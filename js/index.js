var board = new Board();
var player = new Player();
var time = new TimerCount();
var SoundMenu = new Audio('sounds/music.mp3');




$("#start").click(function() {

  board.createObstacles();
  time._checkTimer();
  player.movementPlayer1();
  player.movementPlayer2();
  board.moveLine();
  SoundMenu.play();

});
