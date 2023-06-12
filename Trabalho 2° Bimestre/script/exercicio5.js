let inputNumber01 = document.querySelector("#inputNumber01");
let inputNumber02 = document.querySelector("#inputNumber02");
let btCalcular = document.querySelector("#btCalcular");
let h2Resultado = document.querySelector("#h2Resultado");

function calcularlitros(){
    let valor1 = Number(inputNumber01.value);
    let valor2 = Number(inputNumber02.value);

    let litros = (valor2 / valor1);

    h2Resultado.innerHTML = "Voce consegue colocar " +litros.toFixed(3) +" litros de gasolina com esse valor!";

}

btCalcular.onclick = function(){
    calcularlitros();
}