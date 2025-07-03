const estudante = {
    nome: 'Pablo',
    idade: 20,
    cpf: '12345678901',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['11000000000', '11020200202'],
    endereco: [{
        rua: 'Barra Funda',
        numero: '153',
        complemento: null
    },
    {
        rua: 'Brasilandia',
        numero: '187',
        complemento: null
    }]
}

for (let chave in estudante) {
    const tipo = typeof estudante[chave]
    if (tipo !== 'object' && tipo !== 'function') {
        const texto = `Chave: ${chave} | Valor: ${estudante[chave]}`
        console.log(texto)
    }
}