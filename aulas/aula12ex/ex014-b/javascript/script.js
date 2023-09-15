var hora = new Date().getHours()
var min = new Date().getMinutes()
var segs = new Date().getSeconds()

var B = window.document.body
var P = window.document.getElementById('parh')
var i = window.document.getElementsByTagName('img')[0]

P.innerText = `Agora são exatamente ${hora}h, ${min}min e ${segs}s.`

if (hora >= 0 && hora < 6) {
    B.style.background = 'url(img/night.jpg)'
    i.src = 'img/noite.png'
} else if (hora < 12) {
    i.src = 'img/manha.png'
    B.style.backgroundColor = '#eff156'
} else if (hora < 16) {
    i.src = 'img/tarde.png'
    B.style.backgroundColor = '#4283dd'
} else if (hora < 19) {
    i.src = 'img/sunset.png'
    B.style.backgroundColor = 'darkorange'
} else {
    i.src = 'img/noite.png'
    B.style.background = 'url(img/night.jpg)'
}