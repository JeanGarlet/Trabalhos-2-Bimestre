let inputGenero = document.querySelector("#inputGenero");
let inputAltura = document.querySelector("#inputAltura");
let btCalcular = document.querySelector("#btCalcular");
let h2Resultado = document.querySelector("#h2Resultado");

function pesoIdeal(){
    let genero = String(inputGenero.value);
    let altura = Number(inputAltura.value);

    let homem = (72.7 * altura) - 58;
    let mulher = (62.1 * altura) - 44.7;

    if(genero = "Mulher" && "mulher" && "feminino" && "Feminino"){
        h2Resultado.innerHTML = "Seu peso ideal &eacute;: " +mulher;
    }else if(genero = "Homeme" && "homem" && "masculino" && "Masculino"){
        h2Resultado.innerHTML = "Seu peso ideal &eacute;: " +homem;
    }
}

btCalcular.onclick = function(){
    pesoIdeal();
}