/*
 * I should be able to set a chronometer and start it
 */

const MIN = 60000,
  SEC = 1000;


/*
  chronometer.setTime()
  chronometer.start()
*/
let chronometer = {
  setTime(val) {
    console.log('set val:', val);
    this.time = val;  
  },
  start(stopCb) {
    console.log(this.time);
    this.currentInterval = setInterval(() => {
      this.time -= SEC;
      if(this.time <= 0) {
        this.stop();
        stopCb();  
      }
      console.log(this.time);
      return this.time;
    }, SEC);
  },
  stop() {
    clearInterval(this.currentInterval);
  }
}

// Tests 
// chronometer.setTime(2 * SEC);
// chronometer.start(() => {
//   console.log('stop callback!');
// });

export default chronometer;
