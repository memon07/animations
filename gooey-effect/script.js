let container = document.getElementById('container');
let count = 50;
for (let i = 0; i < count; i++){
  let glitchBox = document.createElement('div')
    glitchBox.className = 'box';
    container.appendChild(glitchBox);
}
setInterval(function(){
  let glitch = document.getElementsByClassName('box');
  for (let i = 0; i < glitch.length; i++){
    glitch[i].style.left = Math.floor(Math.random()*85) + 'vw';
    glitch[i].style.top = Math.floor(Math.random()*75) + 'vh';
  }
},5000)
