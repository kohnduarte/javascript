var ob1 = {
    nome: 'Erick',
    gen: 'homem',
    idade: 32,
    peso: 57,
    rejuvenescer(anos = 0) {
        this.idade -= anos
    },
    ganharPeso(quilos = 0) {
        this.peso += quilos
    }
}

ob1.rejuvenescer(3)
ob1.ganharPeso(10)

console.log(`${ob1.nome} é ${ob1.gen}, tem ${ob1.idade} anos e pesa ${ob1.peso}kg.`)


