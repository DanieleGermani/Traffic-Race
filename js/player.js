
$(document).on('keydown', function(e){
  var x = $(".car-player1").position().left;
   console.log($(".car-player1").position());
   if(e.keyCode === 37){
    if(x <= 5){
      return;
    }
    $(".car-player1").css({left: x-=20});
  }else if(e.keyCode === 39){
    if(x >= 310){
      return;
    }
    $(".car-player1").css({left: x+=20});
  }

});
