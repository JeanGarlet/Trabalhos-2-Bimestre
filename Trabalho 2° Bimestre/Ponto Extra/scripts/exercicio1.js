let inputNumero1 = document.querySelector("#inputNumero1");
let inputNumero2 = document.querySelector("#inputNumero2");
let inputNumero3 = document.querySelector("#inputNumero3");
let inputNumero4 = document.querySelector("#inputNumero4");
let inputNumero5 = document.querySelector("#inputNumero5");
let btOrdenar = document.querySelector("#btOrdenar");
let h2resultado = document.querySelector("#h2resultado");

function ordenarNumeros(){
    let vlr1 = Number(inputNumero1.value);
    let vlr2 = Number(inputNumero2.value);
    let vlr3 = Number(inputNumero3.value);
    let vlr4 = Number(inputNumero4.value);
    let vlr5 = Number(inputNumero5.value);

    let numeros = [vlr1, vlr2, vlr3, vlr4, vlr5];
    numeros.sort(function(a, b){
        return b - a;
    })

    h2resultado.innerHTML = "Ordem decrescente: " +numeros.join(", ");
}

btOrdenar.onclick = function(){
    ordenarNumeros();
}