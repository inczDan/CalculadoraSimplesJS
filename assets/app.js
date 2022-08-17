  // pegar os inputs
  let valor1 = document.querySelector(".entrada1")
  let valor2 = document.querySelector(".entrada2")
  let somado = document.querySelector(".saida")
  const btnsoma = document.querySelector("#soma")
//   funcao responsavel pela soma
function soma(){
    total = parseInt(valor1.value) + parseInt(valor2.value)
    somado.value = total
    console.log(somado.value)
}
// evento que 'puxa' o click e executa algo 
btnsoma.addEventListener('click', soma)