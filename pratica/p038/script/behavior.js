var botao = window.document.querySelector('input[type="button"]')
botao.addEventListener('click', dieta)

function dieta() {
    var peso = window.document.getElementsByClassName('weight')
    var radio = window.document.getElementsByName('rad')
    var part = window.document.getElementsByName('participante')
    var cnum = window.document.getElementById('n')

    if (radio[0].checked || radio[1].checked) {
        if (radio[0].checked) {
            var action = 'engordar'
        } else {
            var action = 'emagrecer'
        }
        if (part[0].checked || part[1].checked || part[2].checked || part[3].checked || part[4].checked) {
            if (cnum.value.length > 0) {
                if (cnum.value > 0 && cnum.value <= 20) {
                    var x = Number.parseFloat(cnum.value)
                } else {
                    window.alert('O máximo é 20kg!')
                    cnum.value = ''
                    cnum.focus()
                }
            } else {
                window.alert(`${action.charAt(0).toUpperCase() + action.slice(1)} quantos kg?`)
                cnum.focus()
            }
        } else {
            window.alert(`Quem você quer ${action}?`)
        }
    } else {
        window.alert('Escolha se você quer engordar ou emagrecer os participantes.')
    }

    


}