function tabuada()  {
    let num = document.getElementById('txtn') // extraindo dados input
    let tab = document.getElementById('seltab')
    if(num.value.lenght == 0)    {
        window.alert('Por favor, digite um numero')
    }   else    {
        let n = Number(num.value)
        let c = 1
        tab.innerHTM = ''
        while( c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }

    // for (let count = 1; count <= 10; count++ )  {

    //     tab += ` ${num} x ${count} = ${num * c}`
    // }

    // res.innerHTML = tab

}