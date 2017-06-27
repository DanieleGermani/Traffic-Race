function TimerCount() {
  this.timer = 0;
  this.timeOutId = 500;
  this._checkTimer();

}
TimerCount.prototype._checkTimer = function () {
  document.querySelector('#score').innerText = this.timer;
    if(this.timer >= 0 && this.timer <= 500){
      this.timer += 1;
      this.timeOutId = setTimeout(this._checkTimer.bind(this),10);

      }
      else{
        document.querySelector('#score').innerText = "Time is over!!";


      }
};
