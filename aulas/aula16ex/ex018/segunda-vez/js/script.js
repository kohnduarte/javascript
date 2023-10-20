let controle = window.document.getElementById('c1')
controle.focus() // uma alternativa para o atributo 'autofocus'
let b1 = window.document.querySelector('input#botao1')
let caixa = window.document.getElementsByTagName('select')[0]
b1.addEventListener('click', Add)

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
                let number = parseInt(controle.value)
                valores.push(number)
                let item = window.document.createElement('option')
                item.innerText = `Valor ${number} adicionado.`
                caixa.appendChild(item)
            }
}
    
