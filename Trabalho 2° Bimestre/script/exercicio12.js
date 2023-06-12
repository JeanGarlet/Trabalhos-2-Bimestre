let inputNumber = document.querySelector("#inputNumber");
let btCalcular = document.querySelector("#btCalcular");
let h2Resultado = document.querySelector("#h2Resultado");

function lerNumero(){
    let valor1 = Number(inputNumber.value);

    let centena = valor1 / 100;
    let dezena = parseInt(valor1 / 10);
    let unidade = valor1 / 1;
    
    h2Resultado.innerHTML = "Centena: " +centena +"<br>"+
                            "Dezena: " +dezena +"<br>"+
                            "Unidade: " +unidade;
    

}

btCalcular.onclick = function(){
    lerNumero();
}