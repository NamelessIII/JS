function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano') 
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if(idade >= 0 && idade < 4 ) {
                //Bebe
                img.setAttribute('src', 'bebe.png')
            } else if (idade < 13) {
                //Criança
                img.setAttribute('src', 'criança.png')
            } else if (idade < 20) {
                //Adolescente
                img.setAttribute('src', 'adolescente-homem.png')
            } else if (idade < 35) {
                //Homem
                img.setAttribute('src', 'homem.png')
            } else if (idade < 55) {
                //Adulto
                img.setAttribute('src', 'adulto.png')
            } else {
                //Velho
                img.setAttribute('src', 'velho.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if(idade >= 0 && idade < 4 ) {
                //Bebe
                img.setAttribute('src', 'bebe.png')
            } else if (idade < 13) {
                //Criança
                img.setAttribute('src', 'criança.png')
            } else if (idade < 20) {
                //Adolescente
                img.setAttribute('src', 'adolescente-mulher.png')
            } else if (idade < 35) {
                //Mulher
                img.setAttribute('src', 'mulher.png')
            } else if (idade < 55) {
                //Adulta
                img.setAttribute('src', 'adulta.png')
            } else {
                //Velha
                img.setAttribute('src', 'velha.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
   
   
}