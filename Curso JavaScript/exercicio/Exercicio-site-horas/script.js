function carregar() {
    //Usando o querySelector
    let msg = window.document.querySelector('section div#msg');
    let img = window.document.querySelector('section img#imagem');
    //Usando o getElement
    let msg = window.document.getElementById('msg');
    let img = window.document.getElementById('imagem');

    let data = new Date();
    let hora = 20;

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        // Bom dia
        document.body.style.background = '#fed496'
        img.src = 'fotomanha.png'
    } else if (hora >= 12 && hora <= 18) {
        //Boa Tarde
        img.src = 'fototarde.png'
        document.body.style.background = "#eb9470"
    } else {
        // Boa noite
        img.src = 'fotonoite.png'
        document.body.style.background = "#494d50"
    }
}