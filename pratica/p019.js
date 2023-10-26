/*
let numbers = [65, 44, 12, 4]

function myF(elmnt, index, arr) {
    arr[index] = elmnt*10
}

numbers.forEach(myF)

console.log(numbers)

let nums = [1,2,3,4,5]

function fMulti(n, index, arr) {
    arr[index] = n*n*n
}

nums.forEach(fMulti)

console.log(nums)
*/

let fruits = ['apple', 'orange', 'cherry']

function myFunction(item, index) {
    console.log(index + ': ' + item)
}

fruits.forEach(myFunction)

let numbers = [65, 44, 12, 4]

let soma = 0
/*
for (ind in numbers) {
    soma += numbers[ind]
}
*/
/*
for (let ind = 0, c = numbers.length; ind < c; ind++) {
    soma += numbers[ind]
}
*/

numbers[5] = 70

console.log(numbers)

numbers.forEach(function(item) {console.log(item)})

let n = [12, 45, 1, 0, 32, 65, -4, 877, 20]
let maior = -100
let menor = 1000
let soma2 = 0

function GeP(element) {
    if (maior < element) {
        maior = element
    }
    if (menor > element) {
        menor = element
    }
    soma2 += element
} // essa função está sendo chamada no método 'forEach()', o que significa que ela será executada uma vez com cada elemento do array.

n.forEach(GeP)

console.log(`O menor número do meu array é ${menor}. Já o maior é ${maior}. A soma de todos os números é ${soma2}.`)