let num = [5, 8, 2, 9, 3, 10]
num.push(1)
num.sort(function(a, b) {return b - a})
console.log(num)

var n = 7
var pos = num.indexOf(n)

if (pos >= 0) {
    console.log(`O valor ${n} se encontra na posição ${pos}`)
} else {
    console.log(`O valor ${n} não foi encontrado`)
}