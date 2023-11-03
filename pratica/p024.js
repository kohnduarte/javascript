var n = [133, 24, 32, 29, 5, 11, 45, 3, 90]
var maior = 0
var menor = 10000000
var soma = 0

function comparar(item) {
    if (maior < item) {maior = item}
    if (menor > item) {menor = item}
    soma += item
}

n.forEach(comparar)
console.log(`O menor e o maior valor são, respectivamente, ${menor} e ${maior}.`)
console.log(`A soma de todos os valores é ${soma}.`)
var média = soma / n.length
console.log(`A média é ${média}.`)

delete n[0]
console.log(n)
n.shift()
console.log(n)
n.unshift(1, 8, 4)
console.log(n)

n.splice(3)
console.log(n)

var w = n.map((elem) => elem * elem)
console.log(w)

var a = w.map((elem) => Math.sqrt(elem))
console.log(a)
