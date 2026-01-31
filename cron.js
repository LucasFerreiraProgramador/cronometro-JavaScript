"use strict"

var hh = 0;
var mm = 0;
var ss = 0;

var tempo = 1000; //Milisimos de 1 segundo
var cron;

// Inicia o temporizador
function start() {
    
    cron = setInterval(() => { timer(); }, tempo);
}

// Pausa o temporizador
function pause() {
    
    clearInterval(cron);
}

// Zera o temporizador
function reset() {
    
    clearInterval(cron);
    hh = 0;
    mm = 0;
    ss = 0;

    document.getElementById('counter').innerText = '00:00:00';
}

// Contagem do tempo
function timer() {

    ss++;

    if(ss == 59) {
        ss = 0;
        mm++;

        if (mm == 59) {
            mm = 0;
            hh++;
        }
    }

    var format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
    document.getElementById('counter').innerText = format;
}