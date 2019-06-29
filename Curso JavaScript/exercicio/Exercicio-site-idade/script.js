function verificar() {
    let data = new Date();
    let ano = data.getFullYear();
    let form = document.getElementById('txtano');
    let res = document.getElementById('res');

    if (form.value.length == 0 || form.value > ano) {
        window.alert('ERRO! Verifique os dados e tente novamente!');
    } else {
        let formsex = document.getElementsByName('radsex');

        let idade = ano - form.value; //Gerando a Idade
        let genero = '';

        let img = document.createElement('img'); //Criando Elemento IMG
        img.setAttribute('id', 'foto'); //adicionando seletor

        if (formsex[0].checked) { //Formulario Sexo Masculino
            genero = 'Homem'

            if (idade >= 0 && idade <= 10) {
                genero = 'é umMenino'
                img.setAttribute('src', 'fotomenino.png')

            } else if (idade < 21) {
                genero = 'é um Galeroso GERA BAKTÉRIA';
                img.setAttribute('src', 'fotogaleroso.png')

            } else if (idade < 60) {
                genero = 'é um Adulto'
                img.setAttribute('src', 'fotoadulto.png')

            } else if (idade < 90) {
                genero = 'é um Idoso';
                img.setAttribute('src', 'fotoidoso.png')

            } else if (idade >= 100) {
                genero = 'Morreu'
                img.setAttribute('src', 'fotocaixao.png')
            }

        } else if (formsex[1].checked) { //Formulario Sexo Feminino
            genero = 'Mulher'

            if (idade >= 0 && idade <= 10) {
                genero = 'é uma Menina'
                img.setAttribute('src', 'fotomenina.png')
            } else if (idade < 21) {
                genero = ' é uma Galerosa GERA BAKTÉRIA';
                img.setAttribute('src', 'fotogalerosa.png')
            } else if (idade < 60) {
                genero = 'é uma Adulta'
                img.setAttribute('src', 'fotoadulta.png')
            } else if (idade < 90) {
                genero = ' é um Idosa'
                img.setAttribute('src', 'fotoidosa.png')
            } else if (idade >= 100) {
                genero = 'Morreu'
                img.setAttribute('src', 'fotocaixao.png')
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos que você ${genero} com ${idade} anos.`
        res.appendChild(img);
    }
}