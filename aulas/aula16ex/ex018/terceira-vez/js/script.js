let controle = window.document.getElementById('c1')
controle.focus()
let seção = window.document.getElementsByClassName('secao')[0]
let caixa = window.document.getElementsByName('selecao')[0]
let bot1 = window.document.querySelector('input[value="Adicionar"]')
let bot2 = window.document.getElementsByTagName('input')[2]
let D = window.document.createElement('div')
D.setAttribute('class', 'resultado')
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
        seção.appendChild(D)
        D.innerHTML = `<p>Ao todo, temos ${vetor.length} números cadastrados.</p>`
        /*
        vetor.sort(function(a, b) {return b - a})
        D.innerHTML += `<p>O maior valor informado foi ${vetor[0]}.</p>`
        D.innerHTML += `<p>O menor valor informado foi ${vetor[vetor.length - 1]}.</p>`
        */
        let maior = 0
        let menor = 99
        let soma = 0
        for (let i in vetor) {
            if (maior < parseInt(vetor[i])) {
                maior = vetor[i]
            }
            if (menor > parseInt(vetor[i])) {
                menor = vetor[i]
            }
            soma = soma + parseInt(vetor[i])
        }
        D.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        D.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        D.innerHTML += `<p>Somando todos os valores, temos ${soma}.`   
    } else {
        window.alert('É necessário haver pelo menos 2 números para prosseguir.')
        controle.focus()
    }

}