function Player() {

}

Player.prototype.movementPlayer1 = function() {
  $(document).on('keydown', function(e) {
    var x = $(".car-player1").position().left;
    var y = $(".car-player1").position().top;
    //console.log($(".car-player1").position());
    if (e.keyCode === 37) {

      if (x <= 5) {
        return;
      }
      $(".car-player1").css({
        left: x -= 20
      });
    } else if (e.keyCode === 39) {

      if (x >= 550) {
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
      if (y <= 2 ) {
        return;
      }
      $(".car-player1").css({
        top: y -= 20
      });

    }

  });

};
Player.prototype.movementPlayer2 = function() {
  $(document).on('keydown', function(e) {
    var x = $(".car-player2").position().left;
    var y = $(".car-player2").position().top;
    if (e.keyCode === 65) {

      if (x <= 5) {
        return;
      }
      $(".car-player2").css({
        left: x -= 20
      });
    } else if (e.keyCode === 68) {

      if (x >= 550) {
        return;
      }
      $(".car-player2").css({
        left: x += 20
      });
    } else if (e.keyCode === 83) {

      if (y >= 545) {
        return;
      }
      $(".car-player2").css({
        top: y += 20
      });
    } else if (e.keyCode === 87) {
      if (y <= 2 ) {
        return;
      }
      $(".car-player2").css({
        top: y -= 20
      });

    }

  });

};
