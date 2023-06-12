let inputSalario = document.querySelector("#inputSalario");
let inputCargo = document.querySelector("#inputCargo");
let btCalcular = document.querySelector("#btCalcular");
let h2Resultado = document.querySelector("#h2Resultado");

function aumentoSalario() {
  let salario = Number(inputSalario.value);
  let cargo = String(inputCargo.value);

  let porcentagem10 = salario * (10 / 100);
  let porcentagem20 = salario * (20 / 100);
  let porcentagem30 = salario * (30 / 100);
  let porcentagem40 = salario * (40 / 100);

  if (cargo === "Gerente") {
    h2Resultado.innerHTML = "O aumento do gerente e de: " + porcentagem10.toString();
  } else if (cargo === "Engenheiro") {
    h2Resultado.innerHTML = "O aumento do engenheiro e de: " + porcentagem20.toString();
  } else if (cargo === "Tecnico") {
    h2Resultado.innerHTML = "O aumento do Tecnico e de: " + porcentagem30.toString();
  } else {
    h2Resultado.innerHTML = "O aumento desse cargo sera de: " + porcentagem40.toString();
  }
}

btCalcular.onclick = function () {
  aumentoSalario();
}