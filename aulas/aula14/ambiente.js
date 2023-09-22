// estrutura de repetição com variável de controle

/* for (__;__;__) {
    códigos
}

primeira parte: inicialização, por exemplo, uma atribuição

segunda parte: expressão (teste lógico)

terceira parte: incremento

primeiro vem a atribuição, depois o teste lógico, onde a expressão é avaliada pelo interpretador.

se o resultado for 'true', o bloco com códigos é executado

somente depois da execução do bloco é que ocorre o incremento

depois do incremento, a expressão é avaliada novamente e assim será até o resultado ser 'false'

aí, o bloco não é executado e o fluxo sai da estrutura de repetição 

*/

for (var n = 0; n <= 10; n++) {
    console.log(n)
}

console.log(`O valor final de n é ${n}`)