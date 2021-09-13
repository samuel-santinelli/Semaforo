"use scrict"
const semaforo = document.getElementById("semaforo")
let idInterval

function semaforoInteiro(){
    return !semaforo.scr.includes("semaforo")
}

function botoesLigaDesliga(estadoLiga, estadoDesliga){
    const ligar = document.getElementById("ligar")
    const desligar = document.getElementById("desligar")
    ligar.disabled = estadoLiga
    desligar.disabled = estadoDesliga
}


function ligarVermelho(evento){
         
            semaforo.src="img/vermelho.png" 
            if(evento) pararPiscar()  
        }
        
    


function ligarAmarelo(evento){

        semaforo.src="img/amarelo.png"
        botoesLigaDesliga(false, true)
   
}
    function ligarVerde(evento){

        semaforo.src="img/verde.png"

    }

    function pararSemaforo(){
        clearInterval(idInterval)
    }   


    function trocarSemaforo(){
        pararTrocar()
        const idInterval = setInterval (trocaImagem, 1000)
    }


// Barra de Eventos
    document.getElementById("vermelho")
    .addEventListener ("click", ligarVermelho)

    document.getElementById("amarelo")
    .addEventListener ("click", ligarAmarelo)

    document.getElementById("verde")
    .addEventListener ("click", ligarVerde)

    document.getElementById("trocar")
    .addEventListener("click", trocarSemaforo)