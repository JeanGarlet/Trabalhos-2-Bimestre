let inputNumero1 = document.querySelector("#inputNumero1");
let inputNumero2 = document.querySelector("#inputNumero2");
let inputNumero3 = document.querySelector("#inputNumero3");
let btResultado = document.querySelector("#btResultado");
let h2Resultado = document.querySelector("#h2Resultado");

function calcularTriangulos(){
    let x = Number(inputNumero1.value);
    let y = Number(inputNumero2.value);
    let z = Number(inputNumero3.value);

    if (x + y > z && x + z > y && y + z > x) {
        h2Resultado.innerHTML = "Tri&acirc;ngulo Equil&aacute;tero";
    }else if(x === y && sideY === z) {
        h2Resultado.innerHTML = "Tri&acirc;ngulo Is&oacute;sceles";
    }else if(x === y || x === z || y === z) {
        h2Resultado.innerHTML = "Tri&acirc;ngulo Escaleno";
    }else{
        h2Resultado.innerHTML = "N&atilde;o forma um tri&acirc;ngulo";
    }
}

btResultado.onclick = function(){
    calcularTriangulos();
}