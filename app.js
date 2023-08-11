'use script'

const vermelho = document.getElementById('vermelho')
const amarelo = document.getElementById('amarelo')
const verde = document.getElementById('verde')
const semaforo = document.getElementById('semaforo')
const botao = document.getElementById('botao')


vermelho.addEventListener('click', apagarResto)
amarelo.addEventListener('click', apagarResto2)
verde.addEventListener('click', apagarResto3)
botao.addEventListener('click', automatico)

function automatico () {
    semaforo.classList.toggle('automatico')
}

function apagarResto3 () {
    vermelho.classList.add('apagar')
    amarelo.classList.add('apagar')

    verde.classList.remove('apagar')
}
function apagarResto2 () {
    vermelho.classList.add('apagar')
    verde.classList.add('apagar')

    amarelo.classList.remove('apagar')
}
function apagarResto () {
    amarelo.classList.add('apagar')
    verde.classList.add('apagar')

    vermelho.classList.remove('apagar')
}

