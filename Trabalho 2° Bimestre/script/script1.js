let InputNumero01 = document.querySelector("#InputNumero01");
let InputNumero02 = document.querySelector("#InputNumero02");
let btCalcular = document.querySelector("#btCalcular");
let h2Resultado = document.querySelector("#h2Resultado");

function CalcularArea(){ 
let valor1 = Number (InputNumero01.value)
let valor2 = Number(InputNumero02.value)

let Calcular = valor1 * valor2;

h2Resultado.innerHTML = "Area do terreno: "+ Calcular;
}

btCalcular.onclick = function(){
    CalcularArea();

}