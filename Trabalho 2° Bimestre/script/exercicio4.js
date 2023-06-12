let InputNome = document.querySelector("#InputNome");
let InputNumber01 = document.querySelector("#InputNumber01");
let btCalcular = document.querySelector("#btCalcular");
let h2Resultado = document.querySelector("#h2Resultado");

function CalcularDias(){
    let nome = String(InputNome.value);
    let idade = Number(InputNumber01.value);
    let dias = idade * 365;
 
    h2Resultado.textContent = nome + "ja esteve presente em " +dias +" dias. ";
}

btCalcular.onclick = function(){
    CalcularDias();
}