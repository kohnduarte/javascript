function contar() {
    var cinicio = window.document.getElementById('c1')
    var cfim = window.document.querySelector('input#c2')
    var cpasso = window.document.getElementsByName('passo')[0]

    var start = Number.parseInt(cinicio.value)
    var end = parseInt(cfim.value)
    var passo = Number.parseInt(cpasso.value)

    var D = window.document.getElementsByTagName('div')[0]
    var P = window.document.getElementsByClassName('change')[0]

    

    if (start >= -100 && start <= 100) {
        if (end <= 100) {
            if (passo >= 1 && passo <= 10) {
                document.write('boa!')
            }
        }
    } else {
        window.alert('[ERRO] Por favor, preencha os campos novamente')
        P.innerText = 'Preparando a contagem...'
    }

    

}

P.innerText = ''
P.innerText += ' 🏳️FIM🏴'