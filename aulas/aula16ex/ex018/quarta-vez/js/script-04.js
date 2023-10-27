let controle = window.document.getElementById('c1')
controle.focus()
let sect = window.document.getElementsByClassName('secao')[0]
let S = window.document.getElementsByName('selecao')[0]
let b1 = window.document.querySelector('input[value="Adicionar"]')
let b2 = window.document.querySelector('input[value="Finalizar"]')
let Dfinal = window.document.createElement('div')
b1.addEventListener('click', Adic)
b2.addEventListener('click', Final)
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
                Dfinal.innerHTML = ''
                numbers.push(parseInt(controle.value))
                let item = window.document.createElement('option')
                item.innerText = `Número ${controle.value} adicionado.`
                S.appendChild(item)
                controle.value = ''
                controle.focus()
            } else {
                window.alert('Este número já se encontra na lista. Por favor, escolha outro.')
                controle.value = ''
                controle.focus()
            }
        } else {
            window.alert('Apenas números entre 1 e 100 são permitidos.')
            controle.value = ''
            controle.focus()
        }
    } else {
        window.alert('Você esqueceu de digitar um número!')
        controle.focus()
    }
}

function completo(comp, min) {
    if (comp >= min) {
        return true
    } else {
        return false
    }
}

function Final() {
    if (!completo(numbers.length, 2)) {
        window.alert('É necessário haver pelo menos 2 números para avançar.')
        controle.focus()
    } else {
        sect.appendChild(Dfinal)
        Dfinal.innerHTML = `<p>Ao todo, temos ${numbers.length} números cadastrados.</p>`
        let maior = 0
        let menor = 99
        let soma = 0
        function GpS(item) {
            if (maior < item) {
                maior = item
            }
            if (menor > item) {
                menor = item
            }
            soma += item
        }
        numbers.forEach(GpS)
        Dfinal.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        Dfinal.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        Dfinal.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        let média = soma / numbers.length
        Dfinal.innerHTML += `<p>A média dos valores digitados é ${média}.</p>`
    }
}