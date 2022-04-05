

function carregar() {
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')

 var data = new Date()
 var hora = data.getHours()

msg.innerHTML = `Agora são ${hora} Horas.`



if (hora >= 0 && hora <= 12){
    
    //bom dia
    img.src = 'morning.png'
    document.body.style.backgroundColor = '#FFE757'
} else if (hora >= 12 && hora <= 18)  {
    //boa tarde
    img.src = 'evening.png'
    document.body.style.backgroundColor = '#FC901B'
} else {
    //boa noite
    img.src = 'night.png'
    document.body.style.backgroundColor = '#102D3D'
}
    
}