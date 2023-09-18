function Verificar() {
        // cálculo da idade
    var controle = window.document.getElementById('birth')
    var nasceu = Number.parseInt(controle.value)
    var anoat = new Date().getFullYear()
    var idade = anoat - nasceu

        // gênero e imagem

    var radio = window.document.getElementsByName('genero')
    var D = window.document.getElementsByClassName('resultado')[0]
    var P = window.document.querySelector('p#divres')
    var I = window.document.createElement('img')

    if (radio[0].checked) {
        var gen = 'Homem'
        if (idade < 10) {
            I.setAttribute('src', 'img/h-00-09.png')
        }
    } else {
        var gen = 'Mulher'
    }

    P.innerText = `Detectamos ${gen} com ${idade} anos.`
    P.style.textAlign = 'center'
    
}

D.appendChild(I)