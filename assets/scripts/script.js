const hoursEl = document.querySelector("#hour");
const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");
const milisecondsEl = document.querySelector("#miliseconds");
const ampmEl = document.querySelector("#ampm");

function updateClock() {
  let date = new Date();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let miliseconds = date.getMilliseconds();

  let ampm = hour > 12 ? "PM" : "AM"  

  if(hour < 10) hour = `0${hour}`
  if(minutes < 10) minutes = `0${minutes}`
  if(seconds < 10) seconds = `0${seconds}`
  

  hoursEl.innerText = hour;
  minutesEl.innerText = minutes;
  secondsEl.innerText = seconds;
  milisecondsEl.innerText = miliseconds;
  ampmEl.innerText = ampm;

  setTimeout(() => {
    updateClock();
  }, 1)
}

updateClock();