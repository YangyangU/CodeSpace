const secondHand = document.querySelector('.second-hand')
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

// console.log(secondHand);

function setTime() {
  const now = new Date()

  // 获取当前的秒数
  const seconds = now.getSeconds() // 30
  const secondsDegrees = seconds * 6 + 90
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`

  // 获取到分数
  const mins = now.getMinutes() // 40
  const minsDegrees = mins * 6 + 90
  minHand.style.transform = `rotate(${minsDegrees}deg)`

  // 获取到时
  const hour = now.getHours() // 21
  const hourDegrees = hour * 30 + 90 + (mins / 60) * 30
  hourHand.style.transform = `rotate(${hourDegrees}deg)`
}

setTime()
setInterval(setTime, 1000)