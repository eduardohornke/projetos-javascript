function verificar() {
    var dateAtual = new Date(); //todas as informaçoes da data atual
    var anoAtual = dateAtual.getFullYear(); //pega apenas o ano atual
    var anoNasc = document.getElementById('txt_ano'); //pega o ano digitado
    var resp = document.querySelector('#resp');

    //verificar as informaçoes estao corretas
    if (Number(anoNasc.value) > anoAtual || anoNasc.value.length == 0) {
        alert('ERRO!  insira os dados corretamente');
    } else {
        var opSexo = document.getElementsByName('rad_sex');
        var idade = anoAtual - Number(anoNasc.value);
        var genero = '';
        var img = document.createElement('img'); //criando tag <img>
        img.setAttribute('id', 'foto'); //adicionado um id para <img>

        //verificar o sexo e a faixa etaria
        if (opSexo[0].checked) {

            if (idade >= 0 && idade < 11) {
                //CRIANCA
                genero = 'uma criança';
                img.setAttribute('src', 'assets/img/Crianca_Mas.png');
            } else if (idade < 25) {
                //JOVEM
                genero = 'um jovem';
                img.setAttribute('src', 'assets/img/Jovem_Mas.png');
            } else if (idade < 50) {
                //ADULTO
                genero = 'um homen';
                img.setAttribute('src', 'assets/img/Adulto_Mas.png');
            } else {
                //IDOSO
                genero = 'um senhor';
                img.setAttribute('src', 'assets/img/Idoso_Mas.png');
            }

        } else if (opSexo[1].checked) {

            if (idade >= 0 && idade < 11) {
                //CRIANCA
                genero = 'uma criança';
                img.setAttribute('src', 'assets/img/Crianca_Fem.png');
            } else if (idade < 25) {
                //JOVEM
                genero = 'uma jovem';
                img.setAttribute('src', 'assets/img/Jovem_Fem.png');
            } else if (idade < 50) {
                //ADULTO
                genero = 'uma mulher';
                img.setAttribute('src', 'assets/img/Adulto_Fem.png');
            } else {
                //IDOSO
                genero = 'uma senhora';
                img.setAttribute('src', 'assets/img/Idoso_Fem.png');
            }

        }


        resp.style.textAlign = 'center';
        resp.innerHTML = `Foi detectado ${genero} de ${idade} anos.`;
        resp.appendChild(img);
    }
}