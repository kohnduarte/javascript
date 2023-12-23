var ob1 = {
    nome: 'Erick',
    gen: 'homem',
    idade: 32,
    peso: 57,
    age(anos = 0) {
        if (anos > 0) {
            this.idade += anos
            console.log('Envelheceu ' + anos + ' anos! Agora tem ' + this.idade + ' anos.')
        } else if (anos < 0) {
            this.idade += anos 
            console.log(`Rejuvenesceu ${-anos} anos! Agora tem ${this.idade} anos.`)
        }
    },
    pesando(quilos) {
        if (quilos > 0) {
            this.peso += quilos
            console.log(`Engordou ${quilos} kg! Agora está pesando ${this.peso}kg.`)
        } else if (quilos < 0) {
            this.peso += quilos
            console.log(`Emagreceu ${-quilos} kg! Agora está pesando ${this.peso}kg.`)
        }
    }
    
}

ob1.age(-3)
ob1.pesando(10)



