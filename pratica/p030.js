let n = [12, 32, 11, 5, 22, 40, 6, 9]

console.log(n.reduce((x, y) => x > y ? x : y))

let menor = n.reduce((x, y) => x < y ? x : y)

console.log(menor)

