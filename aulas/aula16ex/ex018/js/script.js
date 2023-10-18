let b1 = window.document.getElementById('botao1')
b1.addEventListener('click', Add)
let controle = window.document.querySelector('input#c1')
let S = window.document.getElementsByTagName('select')[0]

function Add() {
    let num = [Number.parseInt(controle.value)]
    if (controle.value.length > 0 && num >= 1 && num <= 100) {
        let O = window.document.createElement('option')
        O.innerText = `Valor ${num} adicionado.`
        S.appendChild(O)
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }

}

function Finish() {
    if (S.innerText.length > 0) {
        alert('ok')
    } else {
        window.alert('Por favor, adicione um número.')
    }
}