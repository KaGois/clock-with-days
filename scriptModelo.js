function relogio (){
    var msg = document.getElementById('msg')
    var msg2 = document.getElementById('msg2')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var sec = data.getSeconds()
    msg.innerHTML = `Agora são ${hora}:${min}:${sec}`
    
    //HORAS 
    if(min < 10){
            min = "0" + min
    }
    if(sec < 10){
            sec = "0" + sec
    }
    //DIA
    if (hora >= 0 && hora < 12) {
        // BOM DIA
        img.src = 'fotomanha.png'
        document.body.style.background = '#febb90'
        msg2.innerHTML = `Bom Dia!`
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE
        img.src= 'fototarde.png'
        document.body.style.background = '#4d5b62'
        msg2.innerHTML = `Boa Tarde!`
    } else {
        // BOA NOITE
        img.src= 'fotonoite.png'
        document.body.style.background = '#0d2929'
        msg2.innerHTML = `Boa Noite!`
    }
    setTimeout(relogio,1000);
}
relogio();