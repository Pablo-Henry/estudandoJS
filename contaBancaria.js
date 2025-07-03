const contaBancaria = {
    titular: 'José',
    saldo: 0,
    depositar: function (valor) {
        return this.saldo += valor 
    },

    sacar: function (valor) {
        if (this.saldo <= 0) {
            return `Saldo Insuficiente`
        }
        return this.saldo -= valor
    }
}

const cliente = {
    nome: 'José',
    conta: contaBancaria
}

const mostrarSaldo = (cliente) => {
    console.log(`Titular: ${cliente.nome}`)
    console.log(`Saldo: R$ ${cliente.conta.saldo}`)
}

const testeDepositar = contaBancaria.depositar(1000)
const testeSacar = contaBancaria.sacar(40)

const teste = mostrarSaldo(cliente)

console.log(`Valor depositado: ${testeDepositar}`)


// 5 - Crie um objeto chamado contaBancaria com as seguintes propriedades:

// titular: uma string representando o titular da conta.
// saldo: um número representando o saldo da conta.
// depositar: uma função que aceita um valor como parâmetro e adiciona esse valor ao saldo da conta. Utilize this para acessar a propriedade saldo.
// sacar: uma função que aceita um valor como parâmetro e subtrai esse valor do saldo da conta. Utilize this para acessar a propriedade saldo. Certifique-se de verificar se há saldo suficiente antes de efetuar o saque.
// Crie um objeto chamado cliente que representa um cliente com uma conta bancária. O objeto deve ter as seguintes propriedades:

// nome: uma string representando o nome do cliente.
// conta: uma referência à conta bancária associada a esse cliente (objeto criado anteriormente).
// Crie uma função chamada mostrarSaldo que aceita o objeto cliente como parâmetro e imprime no console o nome do cliente e o saldo da sua conta utilizando this para acessar as propriedades do objeto.

// Realize operações de depósito e saque na conta bancária do cliente usando as funções do objeto contaBancaria e, em seguida, chame a função para exibir as informações atualizadas no console.

