/*
let a = [11, 3, 7, 4, 18, 9]
a.sort((a, b) => b - a)
console.log(a)
*/

let frutas = ['maçã', 'banana', 'uva', 'manga', 'mamão', 'laranja', 'tangerina', 'melão', 'abacate']
console.log(frutas.slice(-4, -1)) // slice(start, end)

let gosto = frutas.slice(-5, -2)

console.log(gosto)

let meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
meses.splice(1)
console.log(meses)