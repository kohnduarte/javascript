var botao = window.document.querySelector('input[type="button"]')
botao.addEventListener('click', dieta)

function dieta() {
    var peso = window.document.getElementsByClassName('weight')
    var radio = window.document.getElementsByName('rad')
    var part = window.document.getElementsByName('participante')
    var cnum = window.document.getElementById('n')

    if (radio[0].checked || radio[1].checked) {
        if (part[0].checked || part[1].checked || part[2].checked || part[3].checked || part[4].checked) {
            window.alert('ok')
        } else {
            window.alert('erro')
        }
    } else {
        window.alert('Escolha se você quer engordar ou emagrecer os participantes.')
    }

    


}