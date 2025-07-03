const carro = {
    marca: 'Chevrolet',
    modelo: 'Astra',
    ano: 2003,
    cor: 'Prata',
    ligado: false,
    ligar: function (){
        if (!this.ligado === true) {
            this.ligado = true
            console.log('Ligando veiculo')
        }

        if (this.ligado === true) {
            return `O carro já esta Ligado`
        }
    },

    desligar: function () {
        if (!this.ligado === false) {
            this.ligado = false
            console.log('Desligando veiculo')
        }
        
        if (this.ligado === false) {
            return `O carro já esta Desligado`
        }
    },

    obterDetalhes: function () {
        for (let chave in carro) {
            const tipo = typeof carro[chave]
            if (tipo !== 'boolean' && tipo !== 'function')
                console.log(`Especificações: ${chave}: ${carro[chave]}`)
        }
    }
}

let tesetLigar= carro.ligar()
console.log(tesetLigar)

let testeDesligar = carro.desligar()
console.log(testeDesligar)

carro.obterDetalhes()




// 3 - Crie um arquivo chamado metodosObjeto.js para realizar este exercício.

// Utilize o objeto carro do exercício 2 com as propriedades iniciais (marca, modelo, ano, cor) e adicione:

// ligado: uma propriedade do tipo booleana que indica se o carro está ligado ou não.
// ligar: um método que imprime no console uma mensagem indicando que o carro está ligado.
// desligar: um método que imprime no console uma mensagem indicando que o carro está desligado. Observação: se o carro já está ligado (ligado = true), não pode ser ligado novamente e vice-versa.
// obterDetalhes: um método que retorna uma string contendo todos os detalhes do carro (marca, modelo, ano, cor, estado de ligado/desligado).
// Em seguida, faça o seguinte:

// Chame os métodos ligar e desligar do objeto carro e imprima no console as mensagens resultantes.
// Chame o método obterDetalhes e imprima no console a string retornada.
