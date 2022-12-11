const welcomeMenu = document.getElementById('welcomeMenu');
const menu = document.getElementById('menu');
/* Menu Movil */
welcomeMenu.onclick = function() {
    welcomeMenu.classList.add('active');
    menu.classList.add('active');
}


/* Exit- Menu */
const exitMenu = document.getElementById('exitMenu');

exitMenu.onclick = function() {
    welcomeMenu.classList.remove('active');
    menu.classList.remove('active');
}


/* Cambiar Color del Menu */

