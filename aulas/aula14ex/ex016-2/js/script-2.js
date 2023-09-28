function contar() {

var cini = window.document.getElementById('c1')
var cfim = window.document.querySelector('input#c2')
var cpasso = window.document.getElementsByName('passo')[0]

var start = Number.parseInt(cini.value)
var end = parseInt(cfim.value)
var passo = parseInt(cpasso.value)

var P = window.document.getElementsByClassName('change')[0]

if (cini.value.length > 0 && cfim.value.length > 0 && cpasso.value.length > 0) {
    if (passo == 0) {
        window.alert('[ERRO] Impossível contar de ' + passo + ' em ' + passo + '! Considerarei passo 1')
        passo = 1
    }
    P.innerText = ''
    for (n = start; n <= end; n += passo) {
        P.innerHTML += n + ' \u{1F449} '
        // inserindo emojis com JavaScript: \u{código-do-emoji}
    }
} else {
    window.alert('[ERRO] Faltam dados!')
    P.innerText = 'Por favor, preencha todos os campos.'
}






}