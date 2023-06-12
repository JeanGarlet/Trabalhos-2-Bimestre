let inputValor = document.querySelector("#inputValor");
let inputpPagamento = document.querySelector("#inputpPagamento");
let btCalcular = document.querySelector("#btCalcular");
let h2Resultado = document.querySelector("#h2Resultado");

function calculaPagamento(){
    let valor = Number(inputValor.value);
    let pagamento = String(inputpPagamento.value);

    let porcentagem10 = valor - (valor * (10/100));
    let porcentagem15 = valor - (valor *(15/100));
    let semJuros = valor;
    let juros10 = valor + (valor * (10/100));

    if(pagamento = "dinheiro" && "Dinheiro" && "cheque" && "Cheque"){
        h2Resultado.innerHTML = "O valor a ser pago &eacute;: " +porcentagem10;
    }else if(pagamento = "cartao" && "Cartao" && "cart&atilde;o" && "Cart&atilde;o" && "Cr&eacute;dito" && "cr&eacute;dito" && "credito" && "Credito"){
        h2Resultado.innerHTML = "O valor a ser pago &eacute;: " +porcentagem15;
    }else if(pagamento = "Duas vezes" && "duas vezes"){
        h2Resultado.innerHTML = "O valor a ser pago &eacute;: " +semJuros;
    }

}

btCalcular.onclick = function(){
    calculaPagamento();
}
