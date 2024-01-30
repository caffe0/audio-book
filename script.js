const numeroCapitulos = 10

const hashplay = 'bi-play-circle'
const hashpause = 'bi-pause-circle'

const capitulo = document.getElementById('capitulo')
const botaoPlay = document.getElementById("pause")
const botaoAvanc = document.getElementById("avancar")
const botaoBack = document.getElementById("voltar")
const audioCap = document.getElementById("audio-cap")
let tocando = 0
let cap = 1;


function tocar() {
    audioCap.play()
    botaoPlay.classList.remove(hashplay)
    botaoPlay.classList.add(hashpause)
}

function pausar(){
    audioCap.pause()
    botaoPlay.classList.remove(hashpause)
    botaoPlay.classList.add(hashplay)
}

function tocandoOuPausado(){
    if ( tocando == 0){
        tocar();
        tocando=1;
        
    }else{
        pausar();
        tocando=0;
    }
}

function voltar(){
    if(cap === 1){
        cap = 10
    }else{
        cap = cap - 1
    }
    audioCap.src = "./dom-casmurro/" + cap + ".mp3"
    tocar()
    tocando = 1
    nomeFaixa()
}

function proxCap(){
    if(cap === numeroCapitulos){
        cap = 1
    }
    else{
        cap = cap+1
    }
    audioCap.src = "./dom-casmurro/" + cap + ".mp3"
    tocar()
    tocando=1
    nomeFaixa()
}

function nomeFaixa(){
    capitulo.innerText = 'Capítulo '+cap
}

botaoAvanc.addEventListener('click', proxCap)
botaoBack.addEventListener('click', voltar)

botaoPlay.addEventListener('click', tocandoOuPausado)