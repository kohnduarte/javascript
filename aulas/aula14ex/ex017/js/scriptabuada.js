function tabuada() {
    var caixa = window.document.getElementById('c1')
    var S = window.document.querySelector('select#sel')
    var O = window.document.getElementsByName('remover')[0]
    if (caixa.value.length > 0) {
        var n = Number.parseInt(caixa.value)
        if (n >= 0 && n <= 10) {
            O.style.display = 'none'
            for (t = 1; t <= 10; t++) {
                var opt = window.document.createElement('option')
                S.appendChild(opt)
                opt.innerText = `${n} x ${t} = ${n*t}`
            }            
        } else {
            window.alert('[ERRO] O número deve ser entre 0 e 10.')
        }
    } else {
        window.alert('[ERRO] Por favor, é preciso que você insira um número.')
    }
}