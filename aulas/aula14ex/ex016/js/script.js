function contar() {
    var cinicio = window.document.getElementById('c1')
    var cfim = window.document.querySelector('input#c2')
    var cpasso = window.document.getElementsByName('passo')[0]

    var start = Number.parseInt(cinicio.value)
    var end = parseInt(cfim.value)
    var passo = Number.parseInt(cpasso.value)

    var D = window.document.getElementsByTagName('div')[0]
    var P = window.document.getElementsByClassName('change')[0]    

    if (start >= -100 && start <= 100 && end <= 100 && passo >= 1 && passo <= 10) {
        P.innerText = null
        for (n = start; n <= end; n++) {
            P.innerText += ' ' + n + ' 👉'
            n += passo
            n--
        }
        P.innerText += ' 🏳️FIM🏴'
    } else {
        window.alert('[ERRO] Por favor, preencha os campos novamente')
        P.innerText = 'Preparando a contagem...'
    }    

}


