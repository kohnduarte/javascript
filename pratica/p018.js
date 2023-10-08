function parimp(n) {
    if (n % 2 == 0) {
        return 'par' // a instrução 'return' interrompe a execução da função e retorna um valor
    } else {        // uma função pode ter mais de um 'return' DESDE QUE apenas 1 seja executado
        return 'ímpar'
    }
}

var PouI = parimp(245)

console.log(PouI)

function Mult(a=3, b=5) {
    return a*b
}

var produto = Mult()

console.log(produto)

function MyFunction(nome) {
    return 'Hello ' + nome
}

var saudação = MyFunction('John')

console.log(saudação)


