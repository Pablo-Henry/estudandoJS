// 3 - Você recebeu um array numeros contendo valores numéricos. Crie um programa que verifique se um número específico está presente nesse array. Se estiver, o programa deve retornar a posição (índice) desse número. Caso contrário, se o número não estiver presente, o programa deve retornar "-1".

const numeros = [1, 2, 3, 4, 5, 6,7,8,9,10]

const procuraNumero = (numero) => {
    if (numeros.includes(numero)){
        const i = numeros.indexOf(numero)
        console.log(`Número: ${numero} | Indice: ${i} `)
    } else {
        console.log(`-1 - número não encontrado`)
    }
}

procuraNumero(77)
