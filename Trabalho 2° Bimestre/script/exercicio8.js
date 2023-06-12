let inputNumber01 = document.querySelector("#inputNumber01");
let inputNumber02 = document.querySelector("#inputNumber02");
let inputNumber03 = document.querySelector("#inputNumber03");
let btCalcular = document.querySelector("#btCalcular");
let h2Resultado = document.querySelector("#h2Resultado");

function camisas(){
    let valor1 = Number(inputNumber01.value);
    let valor2 = Number(inputNumber02.value);
    let valor3 = Number(inputNumber03.value);

    let pequena = valor1 * 10;
    let media = valor2 * 12;
    let grande = valor3 * 15;

    let total = pequena + media + grande;

    h2Resultado.innerHTML = "Camiseta Pequena: R$ " +pequena +"<br>"+
                            "Camiseta Media: R$ " +media +"<br>"+
                            "Camiseta Grande: R$ " +grande +"<br>"+
                            "Valor Total: R$ " +total
}

btCalcular.onclick = function(){
    camisas();
}