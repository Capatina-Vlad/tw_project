function createDiv() {
    let div = document.createElement('div');
    div.className ="content";
    div.innerText = document.getElementById('content').innerText;
    document.body.appendChild(div);
  }

  window.addEventListener('load',setTimeout(function(){
    document.querySelector('body').classList.add("loaded")
    location.href='home.html';  
  },2000));
