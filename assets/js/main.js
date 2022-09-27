var comecar = document.getElementById('comecarPausar')

var horas = document.getElementById('hora')
var minutos = document.getElementById('minuto')
var segundos = document.getElementById('segundo')

const audio = document.getElementById('sound')

var interval = null

function startInterval() {
  interval = setInterval(function () {
    timer()
  }, 1000)
}

document.addEventListener('click', function (e) {
  const el = e.target

  if (el.classList.contains('comecar')) {
    stopInterval()
    startInterval()

    comecar.innerHTML = 'Pausar'
    comecar.classList.add('pausar')
    comecar.classList.remove('comecar')
  } else if (el.classList.contains('pausar')) {
    stopInterval()
    
    comecar.innerHTML = 'Começar'
    comecar.classList.add('comecar')
    comecar.classList.remove('pausar')
  } else if (el.classList.contains('zerar')) {
    horas.value = 0
    minutos.value = 0
    segundos.value = 0

    comecar.innerHTML = 'Começar'

    comecar.classList.add('comecar')
    comecar.classList.remove('pausar')

    stopInterval()
  }
})

document.addEventListener('keypress', function (event) {
  if (event.key === 'i') {
    stopInterval()
    startInterval()
  } else if (event.key === 'p') {
    stopInterval()
  }
})

function timer() {
  if (horas.value == 0 && minutos.value == 0 && segundos.value == 0) {
    horas.value = 0
    minutos.value = 0
    segundos.value = 0
    audio.play()
    stopInterval()
  } else if (segundos.value != 0) {
    segundos.value--
  } else if (minutos.value != 0 && segundos.value == 0) {
    segundos.value = 59
    minutos.value--
  } else if (horas.value != 0 && minutos.value == 0) {
    minutos.value = 60
    horas.value--
  }
  return
}

function stopInterval() {
  clearInterval(interval)
}
