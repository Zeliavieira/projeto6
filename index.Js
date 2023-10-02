var num1 = document.getElementsByTagName("input")[0];
var num2 = document.getElementsByTagName("input")[1];
var resultado = document.getElementById("resultado");
var limpar = document.getElementById("Limpar");

function somar() {
  let r = parseInt(num1.value) + parseInt(num2.value);
  resultado.innerText = 'A soma é:' + r;

}
function sub() {
    let r = parseFloat(num1.value) - parseFloat(num2.value);
    resultado.innerText = 'A subtração é:' + r;
  }

  function mult() {
    let r = parseFloat(num1.value) * parseFloat(num2.value);
    resultado.innerText = 'A multiplicação é:' + r;
  }

  function div() {
    let r = parseFloat(num1.value) / parseFloat(num2.value);
    resultado.innerText = 'A divisão é:' + r;
  }
   


function clean() { 
    document.getElementById("resultado").innerHTML = "";
}

