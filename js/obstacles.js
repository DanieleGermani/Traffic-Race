var numberId = 0;

function Obstacles(obstacleNumber) {
  this.positionX= this.getRandomPositionX();
  this.positionY = -20;
  this.speed = 0;
}


Obstacles.prototype.getRandomPositionX = function() {
  return Math.floor(Math.random() * 700);
};


Obstacles.prototype.drawObstacle = function() {
  var positionX = this.getRandomPositionX();
  var width = $('#board').width();
  var newObstacle = $('<img src="img/car2.png" width="40px">').addClass('obstacles').attr('id', 'obstacle' +
    numberId).css({
    top: this.positionY,
    left: this.positionX
  });
  $('#board').append(newObstacle);
  numberId++;
};

Obstacles.prototype.moveObstacles = function() {
  console.log('el numero es : ' + numberId);

  switch (numberId) {
    case 1:
      var topPos = $('#obstacle0').position().top;
      var intervalMoveObsta0 = setInterval(function() {
        checkObstacles();
        var obstacleArray;
        if (topPos < 650) {
          obstacleArray = $('#obstacle0');
          var speed = 25;
          $('#obstacle0').css({
            top: topPos += speed
          });
        } else {
          $("#obstacle0").css({
            top: topPos = -20,
          });

        }

      }, 200);

      break;
    case 2:
      topPos = $('#obstacle1').position().top;
      var intervalMoveObsta1 = setInterval(function() {
        checkObstacles();
        var obstacleArray;
        if (topPos < 650) {
          obstacleArray = $('#obstacle1');
          var speed = 30;
          $('#obstacle1').css({
            top: topPos += speed
          });
        } else {
          $("#obstacle1").css({
            top: topPos = -20,
          });
        }
      }, 150);

      break;
    case 3:
      topPos = $('#obstacle2').position().top;
      var intervalMoveObsta2 = setInterval(function() {
        checkObstacles();
        var obstacleArray;
        if (topPos < 650) {
          obstacleArray = $('#obstacle2');
          var speed = 15;
          $('#obstacle2').css({
            top: topPos += speed
          });
        } else {
          $("#obstacle2").css({
            top: topPos = -20,
          });
        }
      }, 180);

      break;
    case 4:
      topPos = $('#obstacle3').position().top;
      var intervalMoveObsta3 = setInterval(function() {
        checkObstacles();
        var obstacleArray;
        if (topPos < 650) {
          obstacleArray = $('#obstacle3');
          var speed = 34;
          $('#obstacle3').css({
            top: topPos += speed
          });
        } else {
          $("#obstacle3").css({
            top: topPos = -20,
          });
        }
      }, 200);


      break;
      case 5:
      topPos = $('#obstacle4').position().top;
      var intervalMoveObsta4 = setInterval(function() {
        checkObstacles();
        var obstacleArray;
        if (topPos < 650) {
          obstacleArray = $('#obstacle4');
          var speed = 34;
          $('#obstacle4').css({
            top: topPos += speed
          });
        } else {
          $("#obstacle4").css({
            top: topPos = -20,
          });
        }
      }, 200);

        break;
    default:

  }

};
function checkObstacles() {
    if($(".car-player1").collision(".obstacles").length > 0){
      $(".result").text('PLAYER 2 WIN!!!!');
      clearInterv();
      return;

    }
    else if($(".car-player2").collision(".obstacles").length > 0) {
      $(".result").text('PLAYER 1 WIN!!!!');
      clearInterv();



    }




}
function clearInterv(){
  clearInterval(intervalMoveObsta0);
  clearInterval(intervalMoveObsta1);
  clearInterval(intervalMoveObsta2);
  clearInterval(intervalMoveObsta3);
  clearInterval(intervalMoveObsta4);
}
