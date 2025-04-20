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
