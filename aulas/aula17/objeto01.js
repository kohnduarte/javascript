let amigo = {
    nome: 'José',
    sexo: 'M',
    peso: 85.4,
    engordar(p=0) {
        if (p > 0) {
            console.log('Engordou!')
            amigo.peso += p
        } else if (p == 0) {
            console.log('Manteve o peso!')
        } else {
            console.log('Emagreceu!')
            this.peso += p
        }
    }
}

amigo.engordar(-5)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)