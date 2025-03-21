// Atividade 01
const ligar = () => {
  let lampada = document.getElementById("lampada");

  //    lampada.src = "img/acesa.jpg"
  if (lampada.src.includes("apagada.jpg")) lampada.src = "img/acesa.jpg";
  else lampada.src = "img/apagada.jpg";
};
//----------------------------------------

// Atividade 02
const gerarImagem = () => {
  let qtdImagem = document.getElementById("inQtdImg").value
  canvas.innerHTML = ""
  if(qtdImagem <= 0)alert("O campo quantidade não pode estar nulo ou negativo.");
  else{
    for (let i = 1; i <= qtdImagem; i++) {
      canvas.innerHTML += `<img class="imagens" src="img/concreto.jpg" alt="Taller de concreto">`
      
    }
  }

};
//----------------------------------------

// Atividade 03

const validaForm = () =>{
  //   let erro = document.getElementById("mensagem-erro");
  //   erro.innerHTML = "";
    
  //   let nome = inCli;
  //   let data = inData;
  //   let fone = inFone;
  //   let mail = inMail;
  //   let prod = inProd;
  //   let qtd = inQtd;
  //   let val = inVal;
  
  
  //   switch (true) {
  //     case nome.value.trim() == "" ||
  //       data.value == "" ||
  //       fone.value == "" ||
  //       mail.value == "" ||
  //       prod.value == "" ||
  //       qtd.value == "" ||
  //       val.value == "":
  //       erro.style.display = "block";
  //       erro.innerHTML = "Erro: O campo não pode estar vazio!";
  //       break;
  
  
  //     case val.value < 0 || qtd.value < 0:
  //       erro.style.display = "block";
  //       erro.innerHTML = "Erro: Este campo não pode ser negativo!";
  
  
  //       break;
  
  
  //     case nome.value.trim().length < 5 || prod.value.trim().length < 5:
  //       erro.innerHTML = "O campo texto não pode ter menos que 5 caracteres!";
  //       erro.style.display = "block";
  //       break;
  
  
  //     default:
  //       break;
  //   }
  // };
    let erro = document.getElementById("mensagem-erro");
    let data = inData.value
    let nome = inCli.value
    let telefone = inFone.value
    let email = inMail.value
    let produto = inProd.value
    let quantidade = inQtd.value
    let valor = inVal.value

    if(!data){
        erro.style.opacity = 1;
        erro.innerHTML = "Mensagem de Erro: A data não pode estar vazia.";
        return false;
    } else if(nome.trim() == "" ){
        erro.style.opacity = 1;
        erro.innerHTML = "Mensagem de Erro: O campo 'Nome do cliente' não pode estar vazio.";
        inCli.focus()
        return false;
    } else if(telefone.trim() == "" ){
        erro.style.opacity = 1;
        erro.innerHTML = "Mensagem de Erro: O campo 'Telefone' não pode estar vazio.";
        inFone.focus()
        return false;
    } else if(email.trim() == "" ){
        erro.style.opacity = 1;
        erro.innerHTML = "Mensagem de Erro: O campo 'E-mail' não pode estar vazio.";
        inMail.focus()
        return false;
    } else if (produto.trim() == "" ) {
        erro.style.opacity = 1;
        erro.innerHTML = "Mensagem de Erro: O campo 'Nome do produto' não pode estar vazio.";
        inProd.focus()
        return false;
    } else if (!quantidade || quantidade < 0){
        erro.style.opacity = 1;
        erro.innerHTML = "Mensagem de Erro: O campo 'Quantidade' não pode estar vazio ou negativo.";
        inQtd.focus()
        return false;
    } else if(!valor || valor < 0){
        erro.style.opacity = 1;
        erro.innerHTML = "Mensagem de Erro: O campo 'Valor unitário' não pode estar vazio ou negativo.";
        inVal.focus()
        return false;
    }

    if(nome.trim().length < 5){
      erro.style.opacity = 1;
        erro.innerHTML = "Mensagem de Erro: O campo 'Nome do cliente' precisa de no mínimo 5 carácteres.";
        inCli.focus()
        return false;
    } else if(produto.trim().length < 5){
    erro.style.opacity = 1;
      erro.innerHTML = "Mensagem de Erro: O campo 'Nome do Produto' precisa de no mínimo 5 carácteres.";
      inProd.focus()
      return false;
  }  else {
    erro.style.opacity = 0;
    alert("Formulário enviado com sucesso!")
  }
}
//----------------------------------------

// Atividade 04
const calcular = () => {
  let valorPedido = parseFloat(document.getElementById("inValorPedido").value);

  if(valorPedido >= 500 && valorPedido < 1000){
    inPercDesc.value = 0.5;
    inValDesc.value = parseFloat(valorPedido * 5/100);
    inValFinal.value = parseFloat(valorPedido - inValDesc.value);
  } else if(valorPedido >= 1000 && valorPedido < 1500) {
    inPercDesc.value = 0.8;
    inValDesc.value = parseFloat(valorPedido * 8/100);
    inValFinal.value = parseFloat(valorPedido - inValDesc.value);
  } else if (valorPedido >= 1500 && valorPedido < 2000){
    inPercDesc.value = 1.0;
    inValDesc.value = parseFloat(valorPedido * 10/100);
    inValFinal.value = parseFloat(valorPedido - inValDesc.value);
  } else if (valorPedido >= 2000) {
    inPercDesc.value = 1.5;
    inValDesc.value = parseFloat(valorPedido * 15/100);
    inValFinal.value = parseFloat(valorPedido - inValDesc.value);
  } else if (valorPedido < 500 && valorPedido > 0) {
    inPercDesc.value = 0;
    inValDesc.value = parseFloat(valorPedido * 0/100);
    inValFinal.value = parseFloat(valorPedido - inValDesc.value);
  } else {
    alert("Valor inválido")
    direita.inValorPedido.focus();
  }
};
//----------------------------------------
