let controle = window.document.getElementById('c1')
controle.focus() // uma alternativa para o atributo 'autofocus'
let b1 = window.document.querySelector('input#botao1')
b1.addEventListener('click', Add)

function Add() {
    if (controle.value.length == 0) {
        window.alert('Por favor, digite um número.')
        controle.focus()
    } else {
        let number = parseInt(controle.value)
        if (number < 1 || number > 100) {
            window.alert('O número deve estar entre 1 e 100.')
            controle.value = ''
            controle.focus()
        } else {
            window.alert('ok')
        }
    }
}