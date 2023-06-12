let inoputNumero = document.querySelector("#inoputNumero");
let btCalcular = document.querySelector("#btCalcular");
let h2Resultado = document.querySelector("#h2Resultado");

function calculaNotas(){
    let vlr1 = Number(inoputNumero.value);

    let notas100 = Math.floor(vlr1 / 100);
    vlr1 %= 100;

    let notas50 = Math.floor(vlr1 / 50);
    vlr1 %= 50;

    let notas10 = Math.floor(vlr1 / 10);
    vlr1 %= 10;

    let notas5 = Math.floor(vlr1 / 5);
    vlr1 %= 5;

    let notas1 = vlr1;

    let resultado = "Valor recebido: R$ " +vlr1 + "<br>";
    resultado += "Notas de R$100: " + notas100 + "<br>";
    resultado += "Notas de R$50: " + notas50 + "<br>";
    resultado += "Notas de R$10: " + notas10 + "<br>";
    resultado += "Notas de R$5: " + notas5 + "<br>";
    resultado += "Notas de R$1: " + notas1 + "<br>";

    h2Resultado.innerHTML = resultado;
}

btCalcular.onclick = function(){
    calculaNotas();
}