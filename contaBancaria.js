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

