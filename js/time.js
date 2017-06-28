function TimerCount() {
  this.timer = 0;
  this.timeOutId = 500;
}

TimerCount.prototype._checkTimer = function () {
  document.querySelector('#score').innerText = this.timer;
    if(this.timer >= 0 && this.timer <= 500){
      this.timer += 1;
      this.timeOutId = setTimeout(this._checkTimer.bind(this),1000);
      }
    else{
      document.querySelector('#score').innerText = "Time is over!!";
    }
};
