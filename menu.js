const menuButton = document.getElementById('menuButton');
const menu = document.getElementById('menu');
const menuButtonExit = document.getElementById('menuButtonExit');


menuButton.onclick = function () {
    menuButton.classList.add('active');
    menu.classList.add('active');   
}

menuButtonExit.onclick = function() {
    menuButton.classList.remove('active');
    menu.classList.remove('active'); 
}