function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == "" || fano.value >= ano) {
        alert('[Error] Verifique se o ano digitado esta correto!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''  
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            if (idade >= 0 && idade < 10 )
            {
                //criança
                genero = "Menino"
                img.setAttribute('src','foto-bebe-m.png')
            } else if ( idade > 10 && idade <= 21) {
                //Jovem
                genero = "Jovem homem"
                img.setAttribute('src','foto-jovem-m.png')
            } else if (idade < 60) {
                //adulto
                genero = "Homem adulto"
                img.setAttribute('src','foto-adulto-m.png')
            } else {
                //idoso
                genero = "Homem idoso"
                img.setAttribute('src','foto-idoso-m.png')
            }
        } else if (fsex[1].checked) {
            genero = "Mulher"
            if (idade >= 0 && idade < 10 )
            {
                //criança
                genero = "Menina"
                img.setAttribute('src','foto-bebe-f.png')
            } else if ( idade >= 10 && idade <= 21) {
                //Jovem
                genero = "Jovem mulher"
                img.setAttribute('src','foto-jovem-f.png')
            } else if (idade < 60) {
                //adulto
                genero = "Mulher adulta"
                img.setAttribute('src','foto-adulto-f.png')
            } else {
                //idoso
                genero = "Mulher idosa"
                img.setAttribute('src','foto-idoso-f.png')
            }
        } 
        
        


        if (fano.value == ano - 1){

            res.style.textAlign = 'center'
            res.innerHTML = `${genero} com ${idade} Ano`   
        } else {
           
            res.style.textAlign = 'center'
            res.innerHTML = `${genero} com ${idade} Anos`
  
        }
        
        res.style.fontWeight = 'bold'
        res.appendChild(img)
    
    }


}