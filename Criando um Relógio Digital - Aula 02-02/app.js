const clockContainer = document.querySelector('.clock-container')

const updateClock = () => {
  const presente = new Date()
  const hours = presente.getHours()
  const minutes = presente.getMinutes()
  const seconds = presente.getSeconds()

  const clockHTML = `
    <span>${String(hours).length === 1 ? `0${hours}` : hours}</span> :
    <span>${String(minutes).length === 1 ? `0${minutes}` : minutes}</span> :
    <span>${String(seconds).length === 1 ? `0${seconds}` : seconds}</span>
  `
  clockContainer.innerHTML = clockHTML

}

setInterval(updateClock, 1000)