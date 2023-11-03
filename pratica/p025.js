var n = [7, 14, 39, 25, 50]
var j = n.filter((item) => item > 30)
console.log(j)

var nomes = ['Erick', 'João', 'Catarina', 'Fernanda', 'Bruno', 'Lucas', 'Thiago', 'Ana', 'Maria']
var curtos = nomes.filter((x) => x.length <= 5)
console.log(curtos)
var longos = nomes.filter((x) => x.length > 5)
console.log(longos)

let números = [2, 99, 30, 1, 6, 18, 25, 32, 44, 7, 9, 3, 10, 29, 65, 69, 80]
let n2 = números.filter((item) => item < 10)
console.log(n2)