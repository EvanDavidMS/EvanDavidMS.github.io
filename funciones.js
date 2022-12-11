const changeColor = document.getElementById('changeColor');
const body = document.getElementById('body');
const a = document.getElementById('a');
const a1 = document.getElementById('a1');
const a2 = document.getElementById('a2');
const a3 = document.getElementById('a3');
const header = document.getElementById('header');
const parrafoInicial = document.getElementById('parrafoInicial');
const h1ParrafoInicial = document.getElementById('h1ParrafoInicial');
const h3ParrafoInicial = document.getElementById('h3ParrafoInicial');
const pParrafoInicial = document.getElementById('pParrafoInicial');






changeColor.onclick = function() {
    changeColor.classList.toggle('active');
    body.classList.toggle('active');
    a.classList.toggle('active');
    a1.classList.toggle('active');
    a2.classList.toggle('active');
    a3.classList.toggle('active');
    header.classList.toggle('active');
    parrafoInicial.classList.toggle('active');
    h1ParrafoInicial.classList.toggle('active');
    h3ParrafoInicial.classList.toggle('active');
    pParrafoInicial.classList.toggle('active');

}




