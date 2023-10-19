let b1 = window.document.getElementById('botao1')
b1.addEventListener('click', Add)
let controle = window.document.querySelector('input#c1')
let S = window.document.getElementsByTagName('select')[0]
let D = window.document.getElementsByName('resultado')[0]
let p1 = window.document.createElement('p')
let p2 = window.document.createElement('p')
let p3 = window.document.createElement('p')
let p4 = window.document.createElement('p')
let p5 = window.document.createElement('p')
let a = []

function Add() {    
    let num = parseInt(controle.value)
    if (controle.value.length > 0 && num >= 1 && num <= 100 && a.indexOf(num) == -1) {
        D.innerText = ''
        a.push(num)
        let O = window.document.createElement('option')
        O.innerText = `Valor ${num} adicionado.`
        S.appendChild(O)
        controle.value = ''
        controle.focus()
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
        controle.value = ''
        controle.focus()
    }
}

function Finish() {
    if (a.length >= 3) {
        a.sort(function(a, b) {return a-b})
        p1.innerText = `Ao todo, temos ${a.length} números cadastrados.`
        D.appendChild(p1)
        p2.innerText = `O maior valor informado foi ${a[a.length - 1]}.`
        D.appendChild(p2)
        p3.innerText = `O menor valor informado foi ${a[0]}.`
        D.appendChild(p3)
        let soma = 0
        for (chave = 0; chave < a.length; chave++) {
            soma += a[chave]
        }
        p4.innerText = `Somando todos os valores, temos ${soma}.`
        D.appendChild(p4)
        p5.innerText = `A média dos valores digitados é ${soma / a.length}.`
        D.appendChild(p5)
    } else {
        window.alert('Por favor, adicione pelo menos 3 números.')
        controle.focus()
    }
}