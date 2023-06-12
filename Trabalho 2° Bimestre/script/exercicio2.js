let InputNumber01 = document.querySelector("#InputNumber01");
let btCalcular = document.querySelector("#btCalcular");
let h2Resultado = document.querySelector("#h2Resultado");

function CalcularFerraduras(){
    let valor1 = Number(InputNumber01.value);

    let Calcular = valor1 * 4;

    h2Resultado.innerHTML = "Ferraduras Necessarias: "+Calcular
}

btCalcular.onclick = function(){
    CalcularFerraduras();
}