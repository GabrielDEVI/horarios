var msg = window.document.getElementById('msg2')
var foto = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var minuto = data.getMinutes()

msg.innerHTML = `Agora são extamente ${hora} horas e ${minuto} minutos`



if (hora >= 0 && hora <= 12) {
    foto.innerHTML = '<img> src="pexels-artur-roman-1167355.png" '
    } else if (hora >= 13 && hora <= 18) {
    foto.src = 'pexels-bo-stevens-1046447.png'
    } else {
    foto.src = 'pexels-reynaldo-brigworkz-brigantty-771883.png'
    }


