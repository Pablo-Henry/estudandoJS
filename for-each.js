const notas = [10, 6.5, 8, 7.5]

let somadasNotas = 0

notas.forEach(function ( nota ) {
    somadasNotas += nota
})

const media = somadasNotas / notas.length

console.log(`A média das notas é ${media}`)

//DESESTRUTURANDO FOR EACH:

// notas.forEach(somaNota)

// const somaNotas = ( nota ) => {
//     somadasNotas += nota
// }

const lista = [1, 2, 3, 4, 5];
let soma = 0;

lista.forEach( numero => soma += numero );
console.log(soma) //15\

// lista.forEach( numero => {
//      soma += numero
//    });

// lista.forEach(function ( numero ) {
//     soma += numero
//    });