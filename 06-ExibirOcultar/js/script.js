const exibir = () =>{
    let preguica = document.getElementById("preguica");
    let botao = document.getElementById("btnChave");

    if(botao.textContent == "Exibir"){
        preguica.style.opacity = 1
        botao.textContent = "Ocultar"
    } else {
        preguica.style.opacity = 0
        botao.textContent = "Exibir"
    }
}