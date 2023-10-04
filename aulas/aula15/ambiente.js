/*
let num = [5, 8, 2, 9, 3, 'Erick']
num[1] = 7
console.log(num)
num.indexOf('Erick')
console.log(`O elemento que contém o valor 'Erick' possui índice ${num.indexOf('Erick')}.`)
num[5] = 'Kohn'
console.log(num)
*/

let nums = [5, 8, 2, 9, 3, 21]
nums.sort(function(a, b) {return b - a})
nums.push(10)
console.log(nums)
console.log(`O vetor tem ${nums.length} elementos.`)
console.log(`O primeiro valor do vetor é ${nums[0]}`)
nums[6] = 50
console.log(nums)
nums[10] = 0
console.log(nums)
console.log(`Agora o vetor possui ${nums.length} elementos.`)
console.log(`Os valores dos elementos são: ${nums}`)

for (chave = 0; chave < nums.length; chave++) {
    console.log(`O elemento de índice ${chave} possui valor ${nums[chave]}`)
}










/*
console.log(`Nosso vetor é o ${num}`)
// o método .push() adiciona valores a um array, cria um elemento no final do array e coloca um valor dentro dele

num.push(60)

console.log(num[6])

console.log(num.length)

// o atributo '.length' informa o comprimento do array, a quantidade de valores que ele possui

function compareNumbers(a, b) {
    return a - b;
  }

let vet = [8, 2, 1, 4, 9]
vet.push(10)
vet.push(100)
vet.sort()
console.log(vet)
*/