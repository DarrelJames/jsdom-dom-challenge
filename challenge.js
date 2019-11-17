const counter = document.getElementById('counter')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const pause = document.getElementById('pause')
const heart = document.getElementById('heart')
const submit = document.getElementById('submit');
const likes = document.querySelector('.likes');

let isPaused = false
function increment() {
  setInterval(function () {
    if (!isPaused) {
      counter.innerHTML = parseInt(counter.innerHTML) + 1
    }
  }, 1000)
}

document.addEventListener('DOMContentLoaded', () => {
  increment()
})

plus.addEventListener('click', function(e) {
  counter.innerHTML = parseInt(counter.innerHTML) + 1
})
minus.addEventListener('click', function(e) {
  counter.innerHTML = parseInt(counter.innerHTML) - 1
})
pause.addEventListener('click', function(e) {
  if (isPaused === false) {
    isPaused = true
    pause.innerHTML = 'resume'
    disableButtons()
  } else {
    isPaused = false
    pause.innerHTML = 'pause'
    enableButtons()
  }
})

function disableButtons() {
  minus.disabled = true
  plus.disabled = true
  heart.disabled = true
  submit.disabled = true
}
function enableButtons() {
  minus.disabled = false
  plus.disabled = false
  heart.disabled = false
  submit.disabled = false
}

heart.addEventListener('click', (e) => {
  const newLike = document.createElement('li')
  newLike.innerText = `${counter.innerHTML} has been liked`
  likes.appendChild(newLike)
})

// 8 has been liked 1 time
