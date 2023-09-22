var n = 0

console.log(n)

while (n < 100) {
    n++ // n = n + 1 ou n += 1
    console.log(n)
}

console.log('Chegamos no número ' + n + '!!!')

while (n <= 100 && n > 0) {
    n--
    console.log(n)
}

console.log('Voltamos ao número ' + n + '!!!')

while (n <= 0 && n > -100) {
    n--
    console.log(n)
}

do {
    n++
    console.log(n)
} while (n < 100)

console.log(`De volta ao número ${n}!!`)

var ds = new Date().getDay()

switch (ds) {
    case 0:
        ds = 'Domingo'
        break
    case 1:
        ds = 'Segunda-Feira'
        break 
    case 2:
        ds = 'Terça-Feira'
        break 
    case 3:
        ds = 'Quarta-Feira'
        break 
    case 4:
        ds = 'Quinta-Feira'
        break 
    case 5:
        ds = 'Sexta-Feira'
        break 
    case 6:
        ds = 'Sábado'
        break 
    default:
        console.log(ds + '???')
        console.log(`[ERRO] ${ds} não é um dia válido`)
}

var data = new Date()
var dia = data.getDate()
var mes = data.getMonth()
var ano = data.getFullYear()

switch (mes) {
    case 0:
        mes = 'Janeiro'
        break 
    case 1:
        mes = 'Fevereiro'
        break 
    case 8:
        mes = 'Setembro'
        break 
    case 9:
        mes = 'Outubro'
        break 
}

console.log(`Hoje é ${ds}, ${dia} de ${mes} de ${ano}.`)

var h = data.getHours()
var min = data.getMinutes()
var s = data.getSeconds()

console.log('São exatamente ' + h + ' horas, ' + min + ' minutos e ' + s + ' segundos.')

