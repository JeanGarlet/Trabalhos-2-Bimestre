let inputNumero = document.querySelector("#inputNumero");
let btCalcular = document.querySelector("#btCalcular");
let h2Resultado = document.querySelector("#h2Resultado");

function calculaCredito(){
    let vlr1 = Number(inputNumero.value);

    let nada = vlr1;
    let duzentosQuatrocentos = vlr1 * (20/100);
    let quatrocentosSeiscentos = vlr1 * (30/100);
    let maisSeiscentos = vlr1 * (40/100);

    if(vlr1 <= 200){
        h2Resultado.innerHTML = "Seu saldo m&eacute;dio &eacute; de: " +vlr1 + " Por isso n&atilde;o tera cr&eacute;dito";
    }else if(vlr1 > 200 && vlr1 < 400){
        h2Resultado.innerHTML = "Seu saldo m&eacute;dio &eacute; de: " +vlr1 + " Por isso seu cr&eacute;dito &eacute; de: " +duzentosQuatrocentos;
    }else if(vlr1 > 400 && vlr1 < 600){
        h2Resultado.innerHTML = "Seu saldo m&eacute;dio &eacute; de: " +vlr1 + " Por isso seu cr&eacute;dito &eacute; de: " +quatrocentosSeiscentos;
    }else if(vlr1 > 600){
        h2Resultado.innerHTML = "Seu saldo m&eacute;dio &eacute de: " +vlr1 + " Por isso seu cr&eacute;dito &eacute de: " +maisSeiscentos;
    }
}

btCalcular.onclick = function(){
    calculaCredito();
}