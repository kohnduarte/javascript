function Verificar() {
        // cálculo da idade
    var controle = window.document.getElementById('birth')
    var nasceu = Number.parseInt(controle.value)
    var anoat = new Date().getFullYear()
    var idade = anoat - nasceu

        // gênero e imagem

    var radio = window.document.getElementsByName('genero')    
    var D = window.document.getElementsByClassName('resultado')[0]

    if (nasceu <= anoat && nasceu >= 1900) {        
        if (radio[0].checked) {
            var gen = 'Homem'
            if (idade < 10) {
                I.setAttribute('src', 'img/h-00-09.png')
            } else if (idade < 20) {
                I.src = 'img/h-10-19.png'
            } else if (idade < 40) {
                I.setAttribute('src', 'img/h-20-40.png')
            } else if (idade < 65) {
                I.src = 'img/h-41-64.png'
            } else {
                I.setAttribute('src', 'img/h-65-xxx.png')
            }
        } else {
            var gen = 'Mulher'
            if (idade < 10) {
                I.src = 'img/m-00-09.png'
            } else if (idade < 20) {
                I.setAttribute('src', 'img/m-10-19.png')
            } else if (idade < 40) {
                I.src = 'img/m-20-40.png'
            } else if (idade < 65) {
                I.setAttribute('src', 'img/m-41-64.png')
            } else {
                I.src = 'img/m-65-xxx.png'
            }
        }
        D.innerHTML = `<p style="margin-bottom: 1em;">Detectamos ${gen} com ${idade} anos.</p>`
        D.appendChild(I)
    } else {
        window.alert('[ERRO] Ano inválido!')
        D.innerHTML = '<p>Por favor, insira um ano válido e tente novamente.</p>'
    }

    
    D.style.textAlign = 'center'    
    I.setAttribute('alt', 'imagem que corresponde ao gênero e à idade da pessoa')
    
}

var I = window.document.createElement('img')
