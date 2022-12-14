const comecar = document.getElementById('comecarPausar')

const horas = document.getElementById('hora')
const minutos = document.getElementById('minuto')
const segundos = document.getElementById('segundo')

const audio = document.getElementById('sound')

let interval = null

function startInterval() {
  interval = setInterval(function () {
    timer()
  }, 1000)
}

function stopInterval() {
  clearInterval(interval)
}

function timer() {
  if (horas.value == 0 && minutos.value == 0 && segundos.value == 0) {
    horas.value = 0
    minutos.value = 0
    segundos.value = 0 
    stopInterval()
    audio.play()
    transformaBotaoEmComecar()
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

function transformaBotaoEmComecar() {
  comecar.innerHTML = 'Começar'
  comecar.classList.add('comecar')
  comecar.classList.remove('pausar')
}

function transformaBotaoEmPausar() {
  comecar.innerHTML = 'Pausar'
  comecar.classList.add('pausar')
  comecar.classList.remove('comecar')
}

document.addEventListener('click', function (e) {
  const el = e.target

  if (el.classList.contains('comecar')) {
    startInterval()
    transformaBotaoEmPausar()
  } else if (el.classList.contains('pausar')) {
    stopInterval()
    transformaBotaoEmComecar()
  } else if (el.classList.contains('zerar')) {
    horas.value = 0
    minutos.value = 0
    segundos.value = 0
    stopInterval()
    transformaBotaoEmComecar()
  }
})

document.addEventListener('keypress', function (event) {
  if (event.key === 'i') {
    stopInterval()
    startInterval()
    transformaBotaoEmPausar()
  } else if (event.key === 'p') {
    stopInterval()
    transformaBotaoEmComecar()
  }
})
