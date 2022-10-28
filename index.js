function insert(num) {
  var numero = document.getElementById('result').innerHTML
  document.getElementById('result').innerHTML = numero + num
}

function clean() {
  document.getElementById('result').innerHTML = ''
}

function back() {
  var cleanresult = document.getElementById('result').innerHTML
  document.getElementById('result').innerHTML = cleanresult.substring(
    0,
    cleanresult.length - 1
  )
}

function result() {
  var result = document.getElementById('result').innerHTML
  if (result) {
    document.getElementById('result').innerHTML = eval(result)
  } else {
    document.getElementById('result').innerHTML = 'Nada para calcular'
  }
}
