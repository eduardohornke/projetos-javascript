//troca a imagem, e depois que estiver quebrada, não troca mais
var quebrada = false;
function mudaLampada(tipo) {
    if (!quebrada) {
        document.getElementById("luz").src = "img/" + tipo + ".jpg";
        if (tipo == 'lampada-quebrada') {
            quebrada = true;

//substitui o texto da página            
var titulo = document.querySelector("#titulo1");
    titulo1.innerHTML = "Você quebrou a Lâmpada!";

//outra forma de substituir o texto da página
var titulo = document.querySelector("#titulo2");
    titulo2.textContent = "";
        }
    }
}