var min = 0;
var sec = 0;
var msec = 0;
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");
var interval;

function timer() {
  msec++;
  msecHeading.innerHTML = msec;

  if (msec >= 100) {
    sec++;
    secHeading.innerHTML = sec;
    msec = 0;
  } else if (sec > 60) {
    min++;
    minHeading.innerHTML = min;
    sec = 0;
  }
}
function start() {
  interval = setInterval(timer, 10);
  document.getElementById("start").setAttribute("disabled",true);
}
// function start(){
//      document.getElementById("start").disabled=true;

// }
function pause() {
  clearInterval(interval);
}
function reset() {
  min = 0;
  sec = 0;
  msec = 0;
  minHeading = minHeading.innerHTML = min;
  secHeading = secHeading.innerHTML = sec;
  msecHeading = msecHeading.innerHTML = msec;
  pause();
}
