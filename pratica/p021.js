let comida = ['arroz', 'feijão', 'carne', 'legumes']
let lunch = comida.join('-')
console.log(lunch.length)

let fruits = ["Banana", "Orange", "Apple", "Mango"]
console.log(fruits)
let frutas = fruits.join(" and ")
console.log(frutas)

function funComp(c, d) {
    var a = c.toLowerCase()
    var b = d.toLowerCase()
    if (a < b) {return -1}
    if (a > b) {return 1}
    return 0
}

let a = ['arroz', 'Batata', 'Ovos', 'feijão']
a.sort()
console.log(a)
a.sort(funComp)
console.log(a)