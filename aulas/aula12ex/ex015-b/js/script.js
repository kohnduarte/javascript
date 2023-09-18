function Verificar() {
        // cálculo da idade
    var controle = window.document.getElementById('birth')
    var nasceu = Number.parseInt(controle.value)
    var anoat = new Date().getFullYear()
    var idade = anoat - nasceu

        // gênero e imagem

    var radio = window.document.getElementsByName('genero')
    
    var P = window.document.querySelector('p#divres')
    var D = window.document.getElementsByClassName('resultado')[0]

    if (radio[0].checked) {
        var gen = 'Homem'
        if (idade < 10) {
            I.src = 'img/h-00-09.png'
        } else if (idade < 20) {
            I.setAttribute('src', 'img/h-10-19.png')
        }
    } else {
        var gen = 'Mulher'
    }

    P.innerText = `Detectamos ${gen} com ${idade} anos.`
    D.style.textAlign = 'center'
    P.style.marginBottom = '1em'
    I.setAttribute('alt', 'imagem que corresponde ao gênero e à idade da pessoa')
    D.appendChild(I)
}

var I = window.document.createElement('img')
