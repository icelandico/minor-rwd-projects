const handSeconds = document.querySelector('.seconds-hand')
const handMinutes = document.querySelector('.minutes-hand')
const handHours = document.querySelector('.hour-hand')

function setDate() {
  const timeNow = new Date();
  const seconds = timeNow.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  console.log(seconds)
  handSeconds.style.transform = `rotate(${secondsDegrees}deg)`
  console.log(secondsDegrees)
}

function setMinutes() {
  const timeNow = new Date();
  const minutes = timeNow.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  handMinutes.style.transform = `rotate(${minutesDegrees}deg)`
  console.log(minutes)
}

function setHour() {
  const timeNow = new Date();
  const hours = timeNow.getHours();
  const hoursDegrees = ((hours / 12) * 360) + 90;
  handMinutes.style.transform = `rotate(${minutesDegrees}deg)`
}

setInterval(setDate, 1000)
setInterval(setHour, 3600000)
setInterval(setMinutes, 60000)