let inputNivel = document.querySelector("#inputNivel");
let inputHoras = document.querySelector("#inputHoras");
let btCalcular = document.querySelector("#btCalcular");
let h2Resultado = document.querySelector("#h2Resultado");

function calculaSalario(){
    let nivel = Number(inputNivel.value);
    let horas = Number(inputHoras.value);

    let nvl1 = 12.00 * horas * 4.5;
    let nvl2 = 17.00 * horas * 4.5;
    let nvl3 = 25.00 * horas * 4.5;

    if(nivel == 1){
        h2Resultado.innerHTML = "O nivel do professor &eacute; 1 por isso seu sal&aacute;rio &eacute; de: "+nvl1;
    }else if(nivel == 2){
        h2Resultado.innerHTML = "O nivel do professor &eacute; 2 por isso seu sal&aacute;rio &eacute; de: "+nvl2;
    }else if(nivel == 3){
        h2Resultado.innerHTML = "O nivel do professor &eacute; 3 por isso seu sal&aacute;rio &eacute; de: "+nvl3;
    }

}

btCalcular.onclick = function(){
    calculaSalario();
}