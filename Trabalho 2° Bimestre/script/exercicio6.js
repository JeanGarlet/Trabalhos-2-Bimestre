let inputNumber  = document.querySelector("#inputNumber");
let btCalcular = document.querySelector("#btCalcular");
let h2Resultado = document.querySelector("#h2Resultado");

function calcularPrato(){
    let valor1 = Number(inputNumber.value);
    let kilo = 12.00;

    let preco = valor1 * kilo;

    h2Resultado.textContent = "total a pagar R$: "+preco;
}

btCalcular.onclick  = function(){
    calcularPrato();
}