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

function openForm() {
  document.getElementById("myForm").style.animation = "drop 0.8s ease forwards";
  document.getElementById("myForm").style.display = "block";
  document.getElementById("overlay").style.display = "block";
}

let interval;

function closeForm() {
    document.getElementById("myForm").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}
