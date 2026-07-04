let start = document.getElementById('start')
let stop = document.getElementById('stop')
let head = document.getElementById('heading')
let color
start.addEventListener('click', function() {
  clearInterval(color)
  color = setInterval(function() {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)
    document.querySelector('body').style.backgroundColor = `rgb(${red} , ${green}, ${blue})`
    head.style.color = `rgb(${red / 2} , ${green / 2}, ${blue / 2})`
    start.style.backgroundColor = `rgb(${red / 2} , ${green / 2}, ${blue / 2})`
    stop.style.backgroundColor = `rgb(${red / 2} , ${green / 2}, ${blue / 2})`
  }, 350)
})
stop.addEventListener('click', function() {
  clearInterval(color)
  document.querySelector('body').style.backgroundColor = "white"
  head.style.color = "black"
  start.style.backgroundColor = "white"
  stop.style.backgroundColor = "white"
})

