let inputLanche = document.querySelector("#inputLanche");
let inputNumber1 = document.querySelector("#inputNumber1");
let btCalcular = document.querySelector("#btCalcular");
let h2Resultado = document.querySelector("#h2Resultado");

function calculaPedido() {
  let lanche = inputLanche.value;
  let quantidade = parseInt(inputNumber1.value);
  let valor = 0;

  switch (lanche) {
    case "hotdog":
      valor = 11.0;
      break;
    case "bauru":
      valor = 8.5;
      break;
    case "mistoquente":
      valor = 8.0;
      break;
    case "hamburguer":
      valor = 9.0;
      break;
    case "cheeseburger":
      valor = 10.0;
      break;
    case "refri":
      valor = 4.5;
      break;
  }

  let total = valor * quantidade;

  h2Resultado.innerHTML = "Total a ser pago: R$ " + total.toFixed(2).toString();
}

btCalcular.onclick = function () {
  calculaPedido();
}