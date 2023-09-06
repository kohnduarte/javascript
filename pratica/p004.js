// pra escrever na tela no Node.js, o comando é 'console.log()'
console.log('Bom dia!')
console.log('Tudo bem?')
var humor = 'não'
console.log('Resposta: ' + humor)
if(humor == 'sim') { // bloco pro caso da cond. 'true'
    console.log('Que bom!')
    console.log('Fico feliz!')
} else { // bloco pro caso da condição ser 'false'
    console.log('Por quê?')
    console.log('O que aconteceu?')
}
console.log('Como está sendo a sua semana?')
var semana = 'boa'
console.log(`Resposta: ${semana}`)
if(semana == 'boa') {
    console.log('Ótimo! Que continue assim!')
} else {
    console.log(`${semana}?? Poxa, espero que fique tudo bem. Tenha paciência e se mantenha firme! Vai melhorar!`)
    console.log('Quer um conselho?')
    var conselho = 'sim'
    console.log('Resposta: ' + conselho)
    if(conselho == 'sim') {
        console.log('Todo o bem e todo o mal se originam dentro de nós mesmos.')
    } else {
        console.log('Não tem problema. Força e siga em frente, sempre!!!')
    }
}