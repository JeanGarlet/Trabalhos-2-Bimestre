let inputNumero1 = document.querySelector("#inputNumero1");
let inputNumero2 = document.querySelector("#inputNumero2");
let btCalcular = document.querySelector("#btCalcular");
let h2Resultado = document.querySelector("#h2Resultado");

function calculaTaxa(){
    let vlr1 = Number(inputNumero1.value);
    let vlr2 = Number(inputNumero2.value);

    let valor1 = vlr2 * (1/100);
    let valor2 = vlr2 * (1.5/100);

    if(vlr1 <= 1990){
        h2Resultado.innerHTML = "A taxa &eacute; de: " +valor1;
    }else if(vlr1 > 1990){
        h2Resultado.innerHTML = "A taxa &eacute; de: "+valor2;
    }else{}

}

btCalcular.onclick = function(){
    calculaTaxa();
}