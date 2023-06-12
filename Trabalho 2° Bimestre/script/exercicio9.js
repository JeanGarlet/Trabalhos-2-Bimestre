let inputX = document.querySelector("#x1");
let inputX2 = document.querySelector("#x2");
let inputY = document.querySelector("#y1");
let inputY2 = document.querySelector("#y2");
let btCalcular = document.querySelector("#btCalcular");
let h2Resultado = document.querySelector("#h2Resultado");

function calculaDistancia(){
    let x1 = Number(inputX.value);
    let x2 = Number(inputX2.value);
    let y1 = Number(inputY.value);
    let y2 = Number(inputY2.value);

    let distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

    h2Resultado.innerHTML = "A distancia entre os pontos é : " +distancia;
}

btCalcular.onclick = function(){
    calculaDistancia();
}