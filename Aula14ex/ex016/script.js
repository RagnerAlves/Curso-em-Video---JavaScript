function contar()  {
    let inicio = document.getElementById('txti') // extraindo dadod dp que foi digitado
    let fim = document.getElementById('txtf')
    let passo  = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.lenght == 0 || passo.value.lenght == 0) {   // testando para que nao seja digitado valores vazios ou nulos
        window.alert('[ERROR] Faltam dados !')
        res.innerHTML = 'Impossivel contar'
    } else  {
        res.innerHTML = 'Contando: '
        let i = Number(inicio.value) // convertando para numero valor que esta dentro da variavel
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (i < f)  {
            for (let c = i; c <= f; c += p) {       // contanto n° de passos a partir do valor extraido da variavel
                res.innerHTML += ` ${c} \u{1F449}`
            }            
        }   else {
            for(let c = i; c>= f; c -= p)   {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }

        res.innerHTML += ` ${c} \u{1F3C1}`
        
    }    
} 