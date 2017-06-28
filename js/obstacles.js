var numberId = 0;

function Obstacles(obstacleNumber) {
  this.positionX = this.getRandomPositionX();
  this.positionY = -20;
  this.speed = 0;
}

Obstacles.prototype.getRandomPositionX = function() {
  return Math.floor(Math.random() * 360);
};

Obstacles.prototype.drawObstacle = function() {
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
        var obstacleArray;
        if (topPos < 650) {
          obstacleArray = $('#obstacle0');
          var speed = 10;
          $('#obstacle0').css({
            top: topPos += speed
          });
        } else {
          $("#obstacle0").remove();
        }

      }, 300);

      break;
    case 2:
      topPos = $('#obstacle1').position().top;
      var intervalMoveObsta1 = setInterval(function() {
        var obstacleArray;
        if (topPos < 650) {
          obstacleArray = $('#obstacle1');
          var speed = 10;
          $('#obstacle1').css({
            top: topPos += speed
          });
        } else {
          $("#obstacle1").remove();
        }
      }, 300);
      break;
    case 3:
      topPos = $('#obstacle2').position().top;
      var intervalMoveObsta2 = setInterval(function() {
        var obstacleArray;
        if (topPos < 650) {
          obstacleArray = $('#obstacle2');
          var speed = 10;
          $('#obstacle2').css({
            top: topPos += speed
          });
        } else {
          $("#obstacle2").remove();
        }
      }, 300);
      break;
    case 4:
      topPos = $('#obstacle3').position().top;
      var intervalMoveObsta3 = setInterval(function() {
        var obstacleArray;
        if (topPos < 650) {
          obstacleArray = $('#obstacle3');
          var speed = 10;
          $('#obstacle3').css({
            top: topPos += speed
          });
        } else {
          $("#obstacle3").remove();
        }

      }, 300);

      break;
    default:

  }

};
