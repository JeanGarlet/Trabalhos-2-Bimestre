let inputNumber = document.querySelector("#inputNumber");
let btCalcular = document.querySelector("#btCalcular");
let h2Resultado = document.querySelector("#h2Resultado");

function calculaArea(){
    let valor1 = Number(inputNumber.value);
    let raio = valor1 / 2;
    let raio2 = raio * raio;
    let area = 3.14 * raio2;

    h2Resultado.innerHTML = "Area da pizza " +area+" cm";
}

btCalcular.onclick = function(){
    calculaArea();
}

