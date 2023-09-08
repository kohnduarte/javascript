var dia = new Date().getDay()

/*          ::: condição múltipla :::

        valores fixos, opções, possibilidades

        cada um(a) em uma 'case'

        ao final de cada 'case', um comando 'break' para 'quebrar' a execução dos comandos a partir dali
*/

switch (dia) {
    case 0:
        console.log('Hoje é Domingo')
        break
    case 1:
        console.log('Hoje é Segunda-feira')
        break
    case 2:
        console.log('Hoje é Terça-feira')
        break
    case 3:
        console.log('Hoje é Quarta-feira')
        break
    case 4:
        console.log('Hoje é Quinta-feira')
        break
    case 5:
        console.log('Hoje é Sexta-feira')
        break
    case 6:
        console.log('Hoje é Sábado')
        break
    case 7:
        console.log('Esse dia não existe!')
        break
    case 'arroz':
        console.log('Isso não é um dia da semana!')
        break
    default: // caso nenhuma opção sirva
        console.log('[ERRO] dados inválidos')
        break // opcional aqui, já que os comandos do 'switch' chegaram ao fim e não há mais nada a ser executado
} 


/*          ::: condições aninhadas :::

        são condições dentro de outras condições

        if (cond1) {
            
        } else if (cond2) {

        } else {

        }
*/

var idade = 120
console.log(`Você tem ${idade} anos.`)

if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18 || idade >= 65) {
    console.log('Voto opcional')
} else {
    console.log('Voto obrigatório')
}
