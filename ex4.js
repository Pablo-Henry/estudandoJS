//EXIBE OS NOMES PRESENTES NA LISTA
const nomes = ['aline', 'pablo', 'laura', 'miguel', 'ananda', 'ellie', 'tommy', 'dina', 'jesse', 'joel']

for ( nome of nomes ) {
    console.log(nome)
}




function exibeIndiceNome( array ) {
    for (let i = 0; i < array.length; i++) {
        console.log( `Indice: ${i}  |  Elemento: ${array[i]}` )
    }
}

exibeIndiceNome( nomes )

//Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

somaNumero = 0

function somaElementos( array ) {
    for (i of array) {
        somaNumero += i
    }
    console.log( `A soma dos números é de ${somaNumero}` )
}

somaElementos( numeros )

//Crie um programa que utilize um laço for para percorrer uma array const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14] e exibir no console apenas os números pares contidos nesse array.

const number = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14]

//EXIBE SOMENTE OS PARES
for (let i = 0; i < number.length; i++) {
    if ( number[i] % 2 === 0 ) {  //SE O NÚMERO APRESENTADO PELO INDICE DIVIDO POR 2 TIVER O RESTO IGUAL A 0, EXIBA ELE NO CONSOLE
        console.log(number[i])
    }
}

//EXIBE SOMENTE OS IMPARES
for (let i = 0; i < number.length; i++) {
    if ( number[i] % 2 !== 0 ) {  //SE O NÚMERO APRESENTADO PELO INDICE DIVIDO POR 2 TIVER O RESTO IGUAL A 0, EXIBA ELE NO CONSOLE
        console.log(number[i])
    }
}