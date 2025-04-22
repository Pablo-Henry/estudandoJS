// FOREACH() para trabalhar com arrays da forma mais corriqueira - percorrendo do primeiro ao último elemento, sem alterar a condição de parada, e também para manter a coesão do estilo quando em conjunto com outros métodos de array como map, filter e etc;

// FOR OF em caso de iteráveis (dicionários, conjuntos e outras estruturas de dados) ou de arrays quando for necessário o uso de programação assíncrona e/ou dar condições de saída do laço (por exemplo, com o uso de break);

// FOR para casos em que seja necessário manipular de forma mais fina as fases do laço (condição inicial, condição de parada e incremento).


const nomes = [ 'aline', 'pablo', 'laura', 'miguel', 'ananda', 'ellie', 'tommy', 'dina', 'jesse', 'joel' ]

//ENQUANTO O INDICE FOR MENOR QUE O TAMANHO DA LISTA, ADICIONE MAIS UM A ELE. 
for ( let i = 0; i < nomes.length; i++ ) {              //EXIBA O INDICE E O PRODUTO NA POSIÇÃO DO INDICE.
    console.log( i, nomes[i] )
}

//SOMA DE MEDIA COM FOR


const notas = [8, 6.7, 5, 9, 3, 4.5]

let somaNotas = 0


for ( let i = 0; i < notas.length; i++ ) {
    somaNotas += notas[i]
    //somaNotas = somaNotas + notas[i]
}

const media = somaNotas / notas.length

console.log(`Média das notas: ${media.toFixed(2)}`) //toFixed = LIMITA O NUMERO DE CASAS DECIMAIS A SEREM EXIBIDAS


//CONDIÇÕ QUE ADICIONA TODOS OS NÚMEROS PARES DE 0 A 100 | PARA FAZER COM QUE EXIBA OS NÚMEROS IMPARES BASTA TROCAS O VALOR DE I DE 0 PARA 1
const numerosPares = []

for ( let i = 0; i <= 100; i += 2 ) {
    numerosPares.push(i)
}

console.log(numerosPares)

//CONDIÇÕ QUE ADICIONA TODOS OS NÚMEROS IMPARES DE 0 A 100 

const numerosImpares = []

for ( let i = 1; i <= 100; i += 2 ) {
    numerosimpares.push(i)
}

console.log(numerosImpares)
