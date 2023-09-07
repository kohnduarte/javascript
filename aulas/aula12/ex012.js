//var hora = new Date().getHours()
//var min = new Date().getMinutes()
var agora = new Date()
var hora = agora.getHours()
var min = agora.getMinutes()

console.log('Hora atual: ' + hora + ':' + min)

if (hora < 12) {
    console.log('Bom dia!')
} else if (hora < 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}