function contar() {
    var cinicio = window.document.getElementById('c1')
    var cfim = window.document.querySelector('input#c2')
    var cpasso = window.document.getElementsByName('passo')[0]

    var start = Number.parseInt(cinicio.value)
    var end = parseInt(cfim.value)
    var step = Number.parseInt(cpasso.value)

    var D = window.document.getElementsByTagName('div')[0]
    var P = window.document.getElementsByClassName('change')[0]

    P.style.display = 'none'

    var P2 = window.document.createElement('p')
    D.appendChild(P2)

    for (n = start; n <= end; n++) {
        P2.innerText += ' ' + n + ' 👉'
    }

    P2.innerText += ' 🏳️FIM🏴'

    

    R.setAttribute('type', 'button')
    R.setAttribute('value', 'Recomeçar')
    R.setAttribute('onclick', 'apaga()')
    //D.appendChild(R)



}

var R = window.document.createElement('input')

function apaga() {
    P2.style.display = 'none'
}