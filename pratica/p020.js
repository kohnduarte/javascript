let a = [-23, -90, -44, -5 , -79, -3 , -18, -11, -20]
/*
function comparacao(a, b) {
    return a - b
}

a.sort(comparacao)

console.log(a)
*/
let coisas = ['arroz', 'Bengala']
coisas.sort(comp2)
console.log(coisas)

function comp2(s, t) {
    var a = s.toLowerCase()
    var b = t.toLowerCase()
    if (a < b) {return -1}
    if (a > b) {return 1}
    return 0
}

let maior = -1000000
let menor = 1000000
/*
for (ind in a) {
    if (maior < a[ind]) {
        maior = a [ind]
    }
    if (menor > a[ind]) {
        menor = a[ind]
    }
}
*/
/*
for (let ind = 0, len = a.length; ind < len; ind++) {
    if (maior < a[ind]) {
        maior = a[ind]
    }
    if (menor > a[ind]) {
        menor = a[ind]
    }
}
*/
/*
a.forEach(comparacao)
function comparacao(elemento) {
    if (maior < elemento) {
        maior = elemento
    }
    if (menor > elemento) {
        menor = elemento
    }
}
*/
a.sort(function(a, b) {return a - b})
maior = a[0]
menor = a[a.length - 1]
console.log(`Maior valor: ${maior}`)
console.log(`Menor valor: ${menor}`)