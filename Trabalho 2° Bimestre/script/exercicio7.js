let inputDia = document.querySelector("#inputDia");
let inputMes = document.querySelector("#inputMes");
let btCalcular = document.querySelector("#btCalcular");
let h2Resultado = document.querySelector("#h2Resultado");

function calcularDias(){
    let dia = Number(inputDia.value);
    let mes = Number(inputMes.value);

    let diasPassados = (mes - 0) * 30 + dia;

    h2Resultado.textContent = "Ja se passaram " +diasPassados+" Dias desde o começo do ano";
}

btCalcular.onclick = function(){
    calcularDias();
}

