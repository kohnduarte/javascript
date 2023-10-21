let controle = window.document.getElementById('c1')
controle.focus()
let caixa = window.document.getElementsByName('selecao')[0]
let bot1 = window.document.querySelector('input[value="Adicionar"]')
let bot2 = window.document.getElementsByTagName('input')[2]
bot1.addEventListener('click', add)
bot2.addEventListener('click', end)
let vetor = []

function vazio(comp, vaz) {
    if (comp == vaz) {
        return true
    } else {
        return false
    }
}

function numVal(n, min, max) {
    if (n >= min && n <= max) {
        return true
    } else {
        return false
    }
}

function naLista(a, n, i) {
    if (a.indexOf(n) > i) {
        return true
    } else {
        return false
    }

}

function add() {
    if (! vazio(controle.value.length, 0)) {
        if (numVal(controle.value, 1, 100)) {
            if (! naLista(vetor, controle.value, -1)) {
                vetor.push(controle.value)
                let item = window.document.createElement('option')
                item.innerText = `Valor ${controle.value} adicionado.`
                caixa.appendChild(item)
                controle.value = ''               
                controle.focus()
            } else {
                window.alert('Esse valor já está na lista.')
                controle.value = ''
                controle.focus()
            }
        } else {
            window.alert('O número deve estar entre 1 e 100.')
            controle.value = ''
            controle.focus()
        }
    } else {
        window.alert('Por favor, digite um número.')
        controle.focus()
    }

}

function compMin(compvet, n) {
    if (compvet >= n) {
        return true
    } else {
        return false
    }
}

function end() {
    if (compMin(vetor.length, 2)) {
        window.alert('ok')
    } else {
        window.alert('É necessário haver pelo menos 2 números para prosseguir.')
        controle.focus()
    }

}