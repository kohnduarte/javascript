let controle = window.document.getElementById('c1')
controle.focus()
let S = window.document.getElementsByName('selecao')[0]
let b1 = window.document.querySelector('input[value="Adicionar"]')
b1.addEventListener('click', Adic)
let numbers = []

function vazio(comp, zero) {
    if (comp == zero) {
        return true
    } else {
        return false
    }
}

function numvalido(n, min, max) {
    if (n >= min && n <= max) {
        return true
    } else {
        return false
    }
}

function presente(n, zero, lista) {
    if (lista.indexOf(n) >= zero) {
        return true
    } else {
        return false
    }
}

function Adic() {
    if (!vazio(controle.value.length, 0)) {
        if (numvalido(parseInt(controle.value), 1, 100)) {
            if (!presente(parseInt(controle.value), 0, numbers)) {
                numbers.push(parseInt(controle.value))
                let item = window.document.createElement('option')
                item.innerText = `Número ${controle.value} adicionado.`
                S.appendChild(item)
            } else {
                window.alert('Este número já se encontra na lista. Por favor, escolha outro.')
            }
        } else {
            window.alert('Apenas números entre 1 e 100 são permitidos.')
        }
    } else {
        window.alert('Você esqueceu de digitar um número!')
    }
}