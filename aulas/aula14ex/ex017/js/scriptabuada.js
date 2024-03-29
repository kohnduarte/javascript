function tabuada() {
    var caixa = window.document.getElementById('c1')
    var S = window.document.querySelector('select#sel')
        
    if (caixa.value.length > 0) {
        var n = Number.parseInt(caixa.value)
        if (n >= 0 && n <= 10) {            
            S.innerHTML = ''
            for (t = 1; t <= 10; t++) {
                var opt = window.document.createElement('option')
                //opt.value = `${n} x ${t} = ${n*t}`
                opt.setAttribute('value', `${n} x ${t} = ${n*t}`)
                S.appendChild(opt)
                opt.innerText = `${n} x ${t} = ${n*t}`
            }            
        } else {
            window.alert('[ERRO] O número deve ser entre 0 e 10.')
            S.innerHTML = '<option>Digite um número acima entre 0 e 10</option>'
            caixa.value = ''
            caixa.focus()
        }
    } else {
        window.alert('[ERRO] Por favor, é preciso que você insira um número.')
        S.innerHTML = '<option>Digite um número acima</option>'
        caixa.focus()
    }
}