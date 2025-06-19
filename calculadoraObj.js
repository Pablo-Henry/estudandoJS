const notas = [7, 8, 5, 4.5]

const calculadora = {
    soma: function ( a, b ) {
        return a + b
    },

    subtracao: function ( c, d ) {
        return d - c
    },

    multiplicacao: function ( e, f ) {
        return e * f 
    },

    divisao: function ( g, h ) {
        if (h === 0) {
            return `Error - Divisão por 0 Não é permitida`
        }
        return g / h
    },

    calcularMedia: function ( array ) {
        let somaDasNotas = 0
        notas.forEach( nota => {
            somaDasNotas += nota
        })
        const media = somaDasNotas / array.length
        return media
    }
}

let adicao = calculadora.soma(1, 2);
let subtracao = calculadora.subtracao(1, 2);
let multiplicacao = calculadora.multiplicacao(2, 2);
let divisao = calculadora.divisao(10, 0);

console.log(adicao)
console.log(subtracao)
console.log(multiplicacao)
console.log(divisao)


let mediaNotas = calculadora.calcularMedia( notas )

console.log( mediaNotas.toFixed(2) )


// 4 - Crie um objeto chamado calculadora que terá os seguintes métodos:

// soma: uma função que aceita dois parâmetros e retorna a soma deles.
// subtracao: uma função que aceita dois parâmetros e retorna a subtração do segundo parâmetro do primeiro.
// multiplicacao: uma função que aceita dois parâmetros e retorna o resultado da multiplicação deles.
// divisao: uma função que aceita dois parâmetros e retorna o resultado da divisão do primeiro pelo segundo. Certifique-se de tratar a divisão por zero, retornando uma mensagem apropriada nesse caso.
// a) Chame cada função dentro do objeto calculadora passando valores como argumentos e imprima no console os resultados obtidos.

// b) Adicione um novo método chamado calcularMedia ao objeto calculadora. Esta função deve aceitar um array de números como parâmetro e retornar a média aritmética dos valores.

// c) Chame a função calcularMedia passando um array de números e imprima no console o resultado obtido.