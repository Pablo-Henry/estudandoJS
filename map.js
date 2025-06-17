const notas = [10, 9.5, 8, 7, 6]

// const notasAtualizadas = notas.map( function (nota) {
//     return nota += 1
// } )

const notasAtualizadas = notas.map( (nota) => {
        if ( nota + 1 > 10 ){
            return 10
        } else {
            return nota += 1
        }
} )



console.log(notasAtualizadas)



//SEGUNDA FORMA DE FAZER A FUNÇÃO ACIMA UTILIZANDO OPERADORES TERNARIOS
// const notasAtualizadas = notas.map( ( nota ) => nota + 1 >= 10 ? 10 : nota + 1 );

const nomes = ['Pablo Henry', 'Aline sOUto'];

const nomePadronizados = nomes.map( (nome) => nome.toUpperCase(nomes) );

console.log(nomePadronizados);




const arrayNums = [1, 2, 3, 4]

const multiplicacaoNumeros = arrayNums.map( (numero) => {
    return numero *= 10 
} )

console.log(multiplicacaoNumeros);