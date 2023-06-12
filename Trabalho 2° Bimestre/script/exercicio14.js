let inputNumber01 = document.querySelector("#inputNumber01");
let btCalcular = document.querySelector("#btCalcular");
let h2Resultado = document.querySelector("#h2Resultado");

function CalcularBar(){
    let valor1 = Number(inputNumber01.value);

    let andre = valor1 / 3;
    let carlos = valor1 / 3;
    let felipe = valor1 / 3;

    h2Resultado.innerHTML = "Parte do Andre: R$ "+andre.toFixed(0) +"<br>"+
                            "Parte do Carlos: R$ "+carlos.toFixed(0) +"<br>"+
                            "Parte do Felipe: R$ "+felipe.toFixed(2) +"<br>";
}

btCalcular.onclick = function(){
    CalcularBar();
}
