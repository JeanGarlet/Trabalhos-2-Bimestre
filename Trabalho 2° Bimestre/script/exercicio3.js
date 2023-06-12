let InputNumber01 = document.querySelector("#InputNumber01");
let InputNumber02 = document.querySelector("#InputNumber02");
let btCalcular = document.querySelector("#btCalcular");
let h2Resultado = document.querySelector("#h2Resultado");

function CalcularPaes(){
    let valor1 = Number(InputNumber01.value);
    let valor2 = Number(InputNumber02.value);

    let paes = valor1 * 0.12;
    let broas = valor2 * 1.50;

    let soma = paes + broas;

    let guardar = soma * (10/100);

    h2Resultado.innerHTML = "Paes e Broas (R$): "+soma +"<br>"+
                            "Guardar (R$): "+guardar;
}

btCalcular.onclick = function(){
    CalcularPaes();
}