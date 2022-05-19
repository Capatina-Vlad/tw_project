function fade() {
    var i = 0;
    var titlu = document.getElementById("titlu");
    titlu.style.opacity = 0;
    var k = window.setInterval(function () {
      if (i >= 10) {
        clearInterval(k);
      } else {
        titlu.style.opacity = i / 10;
        i++;
      }
    }, 100);
  }
  fade();

let seconds = 0;
let intervalId = null;

function toggleInterval() {
  intervalId = setInterval(() => {
    seconds++;
    document.getElementById('seconds').textContent = `Stai pe această pagină de ${seconds} secunde.`;
  }, 1000);
}

function startTime() {
  const date = new Date();
  document.getElementById("clock").innerHTML = date.toLocaleTimeString();
  setTimeout(function() {startTime()}, 1000);
}

window.onload = () => {
  toggleInterval();
  startTime();
}