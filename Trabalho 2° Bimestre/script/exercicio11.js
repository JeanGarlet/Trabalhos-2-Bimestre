let inputNumber01 = document.querySelector("#inputNumber01");
let btCalcular = document.querySelector("#btCalcular");
let h2Resultado = document.querySelector("#h2Resultado");

function calcularAumento(){
    let valor1 = Number(inputNumber01.value)
    
    let salario = valor1 + (valor1 * (15/100));

    let porcentagem = salario - (salrio = (8/100));

    h2Resultado.innerHTML = "Salario Antigo: "+valor1 +"<br>"+
                            "Salario Atual: " +salario +"<br>"+
                            "Salario Definitivo: " +porcentagem;
}

btCalcular.onclick = function(){
    calcularAumento();
}



