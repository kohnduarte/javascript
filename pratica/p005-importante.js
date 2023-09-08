var diaSem = new Date().getDay()

/*          ::: condição múltipla :::

        valores fixos, opções, possibilidades

        cada um(a) em uma 'case'

        ao final de cada 'case', um comando 'break' para 'quebrar' a execução dos comandos a partir dali
*/

var diaM = new Date().getDate()
var mes = new Date().getMonth()
var ano = new Date().getFullYear()

switch (mes) {
    case 0:
        var mes = 'Janeiro'
        break
    case 1:
        var mes = 'Fevereiro'
        break
    case 2:
        var mes = 'Março'
        break
    case 3:
        var mes = 'Abril'
        break
    case 4:
        var mes = 'Maio'
        break
    case 5:
        var mes = 'Junho'
        break
    case 6:
        var mes = 'Julho'
        break
    case 7:
        var mes = 'Agosto'
        break
    case 8:
        var mes = 'Setembro'
        break
    case 9:
        var mes = 'Outubro'
        break 
    case 10:
        var mes = 'Novembro'
        break 
    case 11:
        var mes = 'Dezembro'
        break 
    default:
        console.log('[ERRO] mês inválido')
}

switch (diaSem) {
    case 0:
        var diaSem = 'Domingo'
        break
    case 1:
        var diaSem = 'Segunda-feira'
        break
    case 2:
        var diaSem = 'Terça-feira'
        break
    case 3:
        var diaSem = 'Quarta-feira'
        break
    case 4:
        var diaSem = 'Quinta-feira'
        break
    case 5:
        var diaSem = 'Sexta-feira'
        break
    case 6:
        var diaSem = 'Sábado'
        break
    case 7:
        var diaSem = 'Esse dia não existe!'
        break
    case 'arroz':
        var diaSem = 'Isso não é um dia da semana!'
        break
    default: // caso nenhuma opção sirva
        console.log('[ERRO] dados inválidos')
        break // opcional aqui, já que os comandos do 'switch' chegaram ao fim e não há mais nada a ser executado
} 

console.log(`Hoje é ${diaSem}, dia ${diaM} de ${mes} de ${ano}`)


/*          ::: condições aninhadas :::

        são condições dentro de outras condições

        if (cond1) {
            
        } else if (cond2) {

        } else {

        }
*/

var hora = new Date().getHours()
var min = new Date().getMinutes()
var segs = new Date().getSeconds()

/*var agora = new Date()
var hora = agora.getHours()
var min = agora.getMinutes()
var segs = agora.getSeconds()*/

console.log('Agora são exatamente ' + hora + ':' + min + ':' + segs)

if (hora < 12) {
    console.log('Bom dia!')
} else if (hora < 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}

var idade = 32
console.log(`Você tem ${idade} anos.`)

if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18 || idade >= 65) {
    console.log('Voto opcional')
} else {
    console.log('Voto obrigatório')
}
