import { MIN, SEC } from './variables';

/*
 * puts time in the right format
 */

let twoDigit = function(val) {
  return (val < 10) ? `0${val}` : val;
}

let formatHour = function(time, min, sec) {
  let result = time/60;

  return `${twoDigit(result)}:${twoDigit(min)}:${twoDigit(sec)}`;
}

let formatMin = function(time, sec) {

  let result = time/60;

  if(result > 59) 
    return formatHour(result, time % 60, sec);

  return `00:${twoDigit(result)}:${twoDigit(sec)}`;
}

let formatSec = function(time) {
  let result = time/1000;

  if(result < 1) {
    return '00:00:00';
  } else if(result > 59) {
    return formatMin(result,
      time % 1000);
  } 

  return `00:00:${twoDigit(sec)}`;
}

let formatTime = function(time) {
  return formatSec(time);
}

// 00:01:00
console.log(formatTime(66 * SEC));
