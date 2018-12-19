const handSeconds = document.querySelector('.seconds-hand');
const handMinutes = document.querySelector('.minutes-hand');
const handHours = document.querySelector('.hour-hand');
const timeDisplay = document.querySelector('.time-display > p');

function setDate() {
  const timeNow = getTime();
  const seconds = timeNow.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  handSeconds.style.transform = `rotate(${secondsDegrees}deg)`

  const minutes = timeNow.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  handMinutes.style.transform = `rotate(${minutesDegrees}deg)`

  const hours = timeNow.getHours();
  const hoursDegrees = ((hours / 12) * 360) + 90
  handHours.style.transform = `rotate(${hoursDegrees}deg)`
  timeDisplay.innerHTML = `${hours} : ${minutes} : ${seconds}`
}

function getTime() {
  const timeNow = new Date();
  return timeNow
}


setInterval(setDate, 1000)
