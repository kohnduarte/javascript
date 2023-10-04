let num = [5, 8, 2, 9, 3, 10]
num.push(1)
num.sort(function(a, b) {return a - b})
console.log(num)

var n = 8
var pos = num.indexOf(n)

if (pos >= 0) {
    console.log(`Posição ${pos}`)
} else {
    console.log(`O valor não foi encontrado`)
}