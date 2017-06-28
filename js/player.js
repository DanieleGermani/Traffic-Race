function Player() {
}

Player.prototype.movementPlayer = function (){
  $(document).on('keydown', function(e) {
    var x = $(".car-player1").position().left;
    var y = $(".car-player1").position().top;
    console.log($(".car-player1").position());
    if (e.keyCode === 37) {
      if (x <= 5) {
        return;
      }
      $(".car-player1").css({
        left: x -= 20
      });
    } else if (e.keyCode === 39) {
    if (x >= 310) {
      return;
    }
    $(".car-player1").css({
      left: x += 20
    });
  } else if (e.keyCode === 40) {
    if (y >= 545) {
      return;
    }
    $(".car-player1").css({
      top: y += 20
    });
  } else if (e.keyCode === 38) {
    if (y <= 2) {
      return;

    }
    $(".car-player1").css({
      top: y -= 20
    });
  }
});
};
