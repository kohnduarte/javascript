var a = [24, 32, 44, 9, 16, 25, 0, 99, 35, 69, 4, 31, 40, 55, 78, 12, 15, 33, 71]

var nPositivos = function(el) {return el >= 0}

console.log(a.every(nPositivos))

let b = [1,2,3,4,5]
let controle = 4

let existe = b.some((el) => controle === el)

if (existe == true) {
    console.log('O número já existe')
} else {
    console.log('OK')
}