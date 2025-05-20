const numeros = [6, 9, 12, 15, 18, 21];

let multiplicacao = 0

//EXIBE A SOMA TOTAL DAS MULTIPLICAÇÕES
numeros.forEach(numero => {
    return multiplicacao = multiplicacao + (numero * 3)
})

console.log(multiplicacao)



// EXIBE CADA ELEMENTO MULTIPLICADO POR 3
console.log("Resultados das multiplicações por 3:");
numeros.forEach(numero => {
  const resultadoMultiplicacao = numero * 3;
  console.log(`${numero} * 3 = ${resultadoMultiplicacao}`);
});


//Utilize o método forEach para imprimir cada elemento de um array juntamente com seu índice.
const frutas = ['Maçã', 'Banana', 'Laranja', 'Uva', 'Pera'];

console.log("Elementos do array com seus índices:");

frutas.forEach((fruta, indice) => {
    console.log(`Índice ${indice}: ${fruta}`);
});
