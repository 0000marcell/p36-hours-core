/*
 * I should be able to set a chrometer and start it
 */

let MIN = 6000;

let chronometer = {
  setTime(val) {
    this.time = val * MIN;  
  },
  start() {
    setInterval(function() {
      this.time -= 1;
      console.log(this.time);
    }, 1000);
  }
}

chronometer.setTime(25);
chronometer.start(25);
