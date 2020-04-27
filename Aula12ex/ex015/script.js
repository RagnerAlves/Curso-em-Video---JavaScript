function verificar()    {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 00 || fano.value > ano)    {
        window.alert('[ERRO] Verifique os dados e tente novamente !')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)        
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked)    {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10)   {
                img.setAttribute ('src', 'crianca')
            } else if (idade < 21 )    {
                img.setAttribute ('src', 'homemjovem')
            } else if (idade < 50 ) {
                img.setAttribute ('src', 'homemadulto')
            } else  {
                img.setAttribute ('src', 'homemidoso')
            }
        } else if (fsex[1].check){
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10)   {
                img.setAttribute ('src', 'crianca')
            } else if (idade < 21 )    {
                img.setAttribute ('src', 'mulherjovem')
            } else if (idade < 50 ) {
                img.setAttribute ('src', 'mulheradulta')
            } else  {
                img.setAttribute ('src', 'mulheridosa')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }

}