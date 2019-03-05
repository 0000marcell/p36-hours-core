
function start() {
  let minute = 0;
  setInterval(function() {
    minute += 1;
    console.log(minute);
  }, 1000);
}

start();
