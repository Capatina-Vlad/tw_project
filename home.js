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

function closeForm() {
  document.getElementById("myForm").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}

function openForm2() {
  document.getElementById("myForm2").style.animation =
    "drop 0.8s ease forwards";
  document.getElementById("myForm2").style.display = "block";
  document.getElementById("overlay").style.display = "block";
}

function closeForm2() {
  document.getElementById("myForm2").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}

window.addEventListener("mouseup", function (event) {
  var box = document.getElementById("myForm");
  if (event.target == this.document.getElementById("overlay")) {
    closeForm();
  }
});

window.addEventListener("mouseup", function (event) {
  var box = document.getElementById("myForm2");
  if (event.target == this.document.getElementById("overlay")) {
    closeForm2();
  }
});

let users = [];

const addUser = (ev) => {
  ev.preventDefault();
  let user = {
    username: document.getElementById("uname").value,
    name: document.getElementById("name").value,
    pnumber: document.getElementById("pnumber").value,
    email: document.getElementById("email").value,
    password: document.getElementById("psw").value,
  };
  users.push(user);
  document.forms[1].reset();
  localStorage.setItem("UserList", JSON.stringify(users));
  closeForm2();
};
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("sbm").addEventListener("click", addUser);
});

const validlogin = (event) => {
  event.preventDefault();

  var email = document.getElementById("lemail").value;
  var password = document.getElementById("lpsw").value;

  var entriesJSON = localStorage.getItem("UserList");
  if (!entriesJSON) {
    alert("Nothing stored!");
    event.preventDefault();
    return;
  }
  var allEntries = JSON.parse(entriesJSON);
  var ok = 1;
  var flag =1;
  for (var i = 0; i < allEntries.length; i++) {
    var entry = allEntries[i];
    var storedPassWord = entry.password;
    var storedEmailAddress = entry.email;
    if (email == storedEmailAddress && password == storedPassWord) {
      alert("Successfully logged in!");
      closeForm();
      document.getElementById("sign").style.display = "none";
      document.getElementById("logIN").style.display = "none";
      document.getElementById("logged").innerText =
        "Hello, " + entry.username + "!";
      document.getElementById("logged").style.display = "block";
      ok = 0;
    } 
  }
  if (ok == 1) {
      alert("Invalid Username or Password! Please try again.");
      event.preventDefault();
    }
};

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("log").addEventListener("click", validlogin);
});

window.addEventListener('load',setTimeout(function(){
  document.querySelector('body').classList.add("loaded")  
},2000));

