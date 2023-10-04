num = [4, 5, 6, 7, 8]
/*
console.log(num[0])
console.log(num[1])
console.log(num[2])
console.log(num[3])
console.log(num[4])
*/
/*let chave = 0
while (chave < 5) {
    console.log(num[chave])
    chave++
}*/

// .length dá o comprimento, em elementos, de um vetor/array
/*
for (let chave = 0; chave < num.length; chave++) {
    //console.log(num[chave])
    //console.log(`A posição ${chave} tem o valor ${num[chave]}`)
    console.log(`O valor ${num[chave]} se encontra na posição ${chave}`)
}*/

console.log(num)
// digite um número para saber a sua chave
let x = 8
let chave = num.indexOf(x)

if (chave >= 0) {
    console.log(`O valor ${x} se encontra na posição ${chave}. Lembrando que a primeira posição é 0.`)
} else {
    console.log('O valor ' + x + ' não foi encontrado!')
}



