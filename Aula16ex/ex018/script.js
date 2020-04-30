let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isnUmero(n) {
    if(Number(n >= 1 && Number(n) <= 100))  {
        return true
    } else  {
        return falst
    }
}

function inlista(n, l)  {
    if (l.indexO(Number(n)) != -1)   {
        return true
    } else {
        return false
    }
}

function adicionar(n) {    
    if(isnUmero(num.value) && ! inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
    }   else {
        window.alert('Valor inválido ou já encontrado na lista')
    }
    num.valuem = ''
    num.focus()
}

function finalizar() {
    if (valores.lenght == 0)    {
        window.alert('Adicione valores antes de finalizar')
    } else  {
        let tot = valores.lenght
        res.innerHTML = ''
        res.innerHTML += `<pAo todo, temos ${tot} números cadastrados </p> `
    }
}