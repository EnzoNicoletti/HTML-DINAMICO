// Atividade 1
const trocarImagem = () => {
  const imagens = [
    "./img/concreto.jpg",
    "./img/deathpool.jpg",
    "./img/door.jpg",
    "./img/PDF.jpg",
    "./img/thebronze.jpg",
  ];

  let imagem = document.getElementById("imagem");

  let indice = 0;

  let num = Math.random();

  if (num > 0.8) indice = 4;
  else if (num > 0.6) indice = 3;
  else if (num > 0.4) indice = 2;
  else if (num > 0.2) indice = 1;
  else indice = 0;

  imagem.src = imagens[indice];
};

//---------------------------------------------------------

// Atividade 2

var resultado = document.getElementById("inResultado");

const somar = () =>{
    let valor1 = frmCalculadora.inValor1.value
    let valor2 = frmCalculadora.inValor2.value
    resultado.value = parseInt(valor1) + parseInt(valor2);
}

const subtrair = () =>{
  let valor1 = frmCalculadora.inValor1.value
  let valor2 = frmCalculadora.inValor2.value
  resultado.value = parseInt(valor1) - parseInt(valor2);
}

const mult = () =>{
  let valor1 = frmCalculadora.inValor1.value
  let valor2 = frmCalculadora.inValor2.value
  resultado.value = parseInt(valor1) * parseInt(valor2);
}

const dividir = () =>{
  let valor1 = frmCalculadora.inValor1.value
  let valor2 = frmCalculadora.inValor2.value
  resultado.value = parseInt(valor1) / parseInt(valor2);
}
