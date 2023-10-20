let controle = window.document.getElementById('c1')
controle.focus() // uma alternativa para o atributo 'autofocus'
let b1 = window.document.querySelector('input#botao1')
let b2 = window.document.querySelector('input[value="Finalizar"]')
let caixa = window.document.getElementsByTagName('select')[0]
let D = window.document.getElementsByClassName('resultado')[2]
b1.addEventListener('click', Add)
b2.addEventListener('click', Fim)

valores = [] // um array é um conjunto ordenado de valores

function vazio() {
    if (controle.value.length == 0) {
        return false
    } else {
        return true
    }
}

function ValidNum() {
    if (parseInt(controle.value) < 1 || parseInt(controle.value) > 100) {
        return false
    } else {
        return true
    }
}

function naLista() {
    if (valores.indexOf(parseInt(controle.value)) != -1) {
        return false
    } else {
        return true
    }
}

function Add() {
    if (!vazio()) {
        window.alert('Por favor, digite um número.')
        controle.focus()
    } else if (!ValidNum()) {          
            window.alert('O número deve estar entre 1 e 100.')
            controle.value = ''
            controle.focus()
        } else if (!naLista()) {              
            window.alert('Valor já encontrado na lista.')
            controle.value = ''
            controle.focus()
            } else {
                D.innerHTML = ''
                let number = parseInt(controle.value)
                valores.push(number)
                let item = window.document.createElement('option')
                item.innerText = `Valor ${number} adicionado.`
                caixa.appendChild(item)
                controle.value = ''
                controle.focus()
            }
}

function Fim() {
    if (valores.length < 2) {
        window.alert('Digite, pelo menos, 2 números.')
        controle.value = ''
        controle.focus()
    } else {
        D.innerHTML = '<p>Ao todo, temos ' + valores.length + ' números cadastrados.</p>'
        valores.sort(function(a, b) {return b-a})
        D.innerHTML += '<p>O maior valor informado foi ' + valores[0] + '.</p>'
        D.innerHTML += '<p>O menor valor informado foi ' + valores[valores.length - 1] + '.</p>'
        let soma = 0

        for (let ind in valores) {
            soma += valores[ind]
        }

        D.innerHTML += '<p>Somando todos os valores, temos ' + soma + '.</p>'
        let média = soma / valores.length
        D.innerHTML += '<p>A média dos valores digitados é ' + média + '.</p>'
        controle.value = ''
        controle.focus()
    }
}
    
