let minuteField = document.querySelector('#minutes')
let secondField = document.querySelector('#seconds')
let button = document.querySelector('.button')
let state = false
let time = ''
let interval = null
let alarm = new Audio("./alarm.mp3")

button.addEventListener('click', (e) => {
    if (e.target.tagName !== 'BUTTON') return
    if (String(minuteField.value) === '00' && String(secondField.value) === '00') {
        alert('Please enter a number.')
        return
    }
    state = !state
    time = minuteField.value * 60 + +secondField.value
    if (state) {
        interval = setInterval(increment, 1000)
    } else if (!state) {
        clearInterval(interval)
        minuteField.value = '00'
        secondField.value = '00'
    }
})

function increment() {
    if (time <= 0) {
        clearInterval(interval)
        minuteField.value = '00'
        secondField.value = '00'
        alarm.play()
        state = !state
    }
    let minutes = Math.floor(time / 60)
    let seconds = time % 60
    minuteField.value = minutes < 10 ? `0${minutes}` : minutes
    secondField.value = seconds < 10 ? `0${seconds}` : seconds
    time--
}


