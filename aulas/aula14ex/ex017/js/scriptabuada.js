function tabuada() {
    var caixa = window.document.getElementById('c1')

    if (caixa.value.length > 0) {
        var n = Number.parseInt(caixa.value)
        if (n >= 0 && n <= 10) {








            
            
        } else {
            window.alert('[ERRO] O número deve ser entre 0 e 10.')
        }
    } else {
        window.alert('[ERRO] Por favor, é preciso que você insira um número.')
    }
}