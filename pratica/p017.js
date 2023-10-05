const person1 = {fname:" Erick", lname:" Kohn", age:32, children:' Jerry Lee'}

console.log('Primeira pessoa:')
for (let dados in person1) {
    console.log(`${dados}:${person1[dados]}`)
}

const person2 = {fname:" Jerry", lname:" Lee", age:7}
const person3 = {fname:" Iva", lname:" Kohn", age:69}
const person4 = {fname:" Paula", lname:" Andrade", age:38, children:' Gael & Luly'}
const person5 = {fname:" Arnaldo", lname:" Souza", age:69, children:' Mary'}
const person6 = {fname:' Regina', lname:' Couto', age:72, children:' Sasha & Shakira'}

console.log('Segunda pessoa:')
for (let dados2 in person2) {
    console.log(`${dados2}:${person2[dados2]}`)
}

console.log('Terceira pessoa:')
for (let dados3 in person3) {
    console.log(`${dados3}:${person3[dados3]}`)
}

console.log('Quarta pessoa:')
for (let dados4 in person4) {
    console.log(`${dados4}:${person4[dados4]}`)
}

console.log('Quinta pessoa:')
for (let dados5 in person5) {
    console.log(`${dados5}:${person5[dados5]}`) 
}

console.log('Sexta pessoa:')
for (let dados6 in person6) {
    console.log(`${dados6}:${person6[dados6]}`)
}