function contar() {

var cini = window.document.getElementById('c1')
var cfim = window.document.querySelector('input#c2')
var cpasso = window.document.getElementsByName('passo')[0]

var start = Number.parseInt(cini.value)
var end = parseInt(cfim.value)
var passo = parseInt(cpasso.value)

var P = window.document.getElementsByClassName('change')[0]

if (cini.value.length > 0 && cfim.value.length > 0 && cpasso.value.length > 0) {
    if (start >= -100 && start <= 100 && end >= -100 && end <= 100 && passo >= 0 && passo <= 10) {
        if (passo == 0) {
            window.alert('[ERRO] Impossível contar de ' + passo + ' em ' + passo + '! Considerarei passo 1')
            passo = 1
        }
        P.innerText = ''
                // início menor que o fim
        for (n = start; n <= end; n += passo) {
            P.innerHTML += n + ' \u{1F449} '
            // inserindo emojis com JavaScript: \u{código-do-emoji}
        }
                // início maior que o fim
        for (n = start; n >= end; n++) {
            P.innerHTML += n + ' \u{1F449} '
            n -= passo
            n--
        }
        P.innerText += ' \u{1F3F3} FIM \u{1F3F3}'
    } else {
        window.alert('[ERRO] Os limites foram ultrapassados!')
        P.innerHTML = 'O <span class="erro">início e o fim</span> devem estar <span class="erro">entre -100 e 100</span> e o <span class="erro">passo</span> deve ser de <span class="erro">1 a 10</span>.'
    }
} else {
    window.alert('[ERRO] Faltam dados!')
    P.innerText = 'Por favor, preencha todos os campos.'
}
}

