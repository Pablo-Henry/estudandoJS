// 3 - Considere duas listas de cores:

// const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho']

// const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul']

// Crie um programa que una essas duas listas, removendo cores duplicadas e exiba a lista final.

const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho']

const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul']

const todasCores = [...coresLista1, ...coresLista2]



const listaDeCores = [...new Set(todasCores)]

console.log(listaDeCores)

// 4 - Escreva uma função que receba um array de números e retorne um array contendo apenas os números pares.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const numerosPares = (array) => {
    const pares = array.filter((numero) => {
        return numero % 2 === 0 
    })

    return pares;    
}

const exibeNumerosPares = numerosPares(numeros)

console.log(numeros)
console.log(exibeNumerosPares)

// 5 - Crie uma função que filtre os números de um array que são múltiplos de 3 e maiores que 5.


const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

const filtraMultiplosDeTresMaioresQueCinco = ( array ) => {
    const filtro = array.filter((numero) => {
        const multiploDeTres = numero % 3 === 0

        const maiorQueCinco = numero > 5

    
        return multiploDeTres && maiorQueCinco
    })

    return filtro
}

const teste = filtraMultiplosDeTresMaioresQueCinco(numeros2)

console.log(numeros2)

console.log(teste)



