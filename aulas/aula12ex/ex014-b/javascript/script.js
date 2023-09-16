var hora = new Date().getHours()
var min = new Date().getMinutes()
var segs = new Date().getSeconds()

var B = window.document.body
var P = window.document.getElementById('parh')
var i = window.document.getElementsByTagName('img')[0]
var S = window.document.getElementsByClassName('secao')[0]
var T = window.document.getElementsByName('titulo')[0]
var P2 = window.document.querySelector('p[title]')

P.innerText = `Agora são exatamente ${hora}h, ${min}min e ${segs}s.`

if (hora < 6) {
    B.style.background = 'url(img/night.jpg) fixed center/cover'
    i.src = 'img/noite.png'
} else if (hora < 12) {
    i.src = 'img/manha.png'
    B.style.backgroundColor = '#e4ec98'
} else if (hora < 16) {
    i.src = 'img/tarde.png'
    B.style.backgroundColor = '#4283dd'
} else if (hora < 19) {
    i.src = 'img/sunset.png'
    B.style.backgroundColor = 'darkorange'
} else {
    i.src = 'img/noite.png'
    B.style.background = 'url(img/night.jpg) fixed center/cover'
}

function carregar() {
    S.style.boxShadow = '1px 1px 5px #0006'
    T.style.textShadow = '1px 1px 3px #000'
    P2.style.textShadow = '1px 1px 3px #000'
}