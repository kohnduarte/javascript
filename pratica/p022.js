let coisas = ['Bola', 'arroz', 'cigarro', 'Disco', 'Abelha', 'buraco', 'Caixa']
coisas.sort()
console.log(coisas)

function fComp(x, y) {        // Bola  - arroz - [b, a] - o valor de retorno precisa ser > 0
    var a = x.toLowerCase()
    var b = y.toLowerCase()
    if (a > b) {return 1}
    if (a < b) {return -1}
    return 0
}
coisas.push('abacate', 'barulho', 'caco')
coisas.sort(fComp)
console.log(coisas)