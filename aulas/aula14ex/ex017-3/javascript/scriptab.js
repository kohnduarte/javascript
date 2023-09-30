var B = window.document.querySelector('input[type="button"]')
B.addEventListener('click', GerarTab)

function GerarTab() {
    var controle = window.document.getElementById('c1')
    var S = window.document.getElementsByTagName('select')[0]
    if (controle.value.length > 0) {
        var n = Number.parseFloat(controle.value)
        if (n >= -100 && n <= 100) {
            var t = 1            
            S.innerHTML = ''
            // 'do/while' estrutura de repetição com teste lógico no final
            do {
                var opt = window.document.createElement('option')
                opt.innerText = n + ' x ' + t + ' = ' + n*t
                //opt.value = n + ' x ' + t
                opt.setAttribute('value', `${n} x ${t}`)
                S.appendChild(opt)
                t++
            } while (t <= 10)
        } else {
            window.alert('[ERRO] Essa tabuada só funciona com números entre -100 e 100.')
            S.innerHTML = '<option>Digite um número acima</option>'
        }
    } else {
        window.alert('[ERRO] Faltam dados!')
        S.innerHTML = '<option>Digite um número acima</option>'
    }
}