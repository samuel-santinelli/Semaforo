"use strict"
const semaforo = document.getElementById("semaforo");
let idInterval;



function ligarSemaforoVermelho(evento){
    semaforo.src ="img/vermelho.png";
    if (evento)parar()
}
function ligarSemaforoAmarelo(evento){
    semaforo.src ="img/amarelo.png";
   
    if (evento)parar()
}

function ligarSemaforoVerde(evento){
    semaforo.src ="img/verde.png";
    if (evento)parar()
}
function semaforoVermelho(){
    return semaforo.src.includes ("vermelho");
   
}
function semaforoAmarelo(){
    return semaforo.src.includes("amarelo");
   
}
function semaforoVerde(){
    return semaforo.src.includes("verde");
   
}


function mudarAutomatico(){
    if(semaforoVermelho()){
        ligarSemaforoAmarelo();
        
    }
    else if(semaforoAmarelo()){
        ligarSemaforoVerde();
      
    }
    else if(semaforoVerde()){
        ligarSemaforoVermelho();
    }
    else
        ligarSemaforoVermelho();
}



function trocarAutomatico(){
    parar()
    idInterval = setInterval(mudarAutomatico,1000);
   
}
function parar(){
    clearInterval(idInterval)
}






//eventos

    document.getElementById("vermelho")
    .addEventListener('click',ligarSemaforoVermelho);
    document.getElementById("amarelo")
    .addEventListener('click',ligarSemaforoAmarelo);
    document.getElementById("verde")
    .addEventListener('click',ligarSemaforoVerde);
    document.getElementById("automatico")
    .addEventListener('click', trocarAutomatico);