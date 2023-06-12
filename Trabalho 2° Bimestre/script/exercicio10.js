let inputNumber01 = document.querySelector("#inputNumber01");
let btCalcular = document.querySelector("#btCalcular");
let h2Resultado = document.querySelector("#h2Resultado");

function calcularDias(){
    let valor1 = Number(inputNumber01.value);

    let anos = Math.floor(valor1 / 365);
    let meses = Math.floor((valor1 % 365) / 30);
    let dias = (valor1 % 365) % 30;

    h2Resultado.innerHTML = "Anos: " +anos +"<br>"+
                            "Meses: " +meses +"<br>"+
                            "Dias: " +dias +"<br>";
}   

btCalcular.onclick = function(){
    calcularDias();
}