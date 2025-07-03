const estudante = {
    nome: 'Pablo',
    idade: 20,
    cpf: '12345678901',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['11000000000', '11020200202'],
    // enderecos: [{
    //     rua: 'Barra Funda',
    //     numero: '153',
    //     complemento: null
    // },
    // {
    //     rua: 'Brasilandia',
    //     numero: '187',
    //     complemento: null
    // }]
}

const objKeys = Object.keys(estudante)
const objValues = Object.values(estudante)
const objEntries = Object.entries(estudante)

if (!objKeys.includes('enderecos')) {
    console.error(`É necessário ter um endereço cadastrado`)
}

//OBJECT.KEYS --> EXIBE UM ARRAY COM AS CHAVES DO OBJETO
//OBJECT.VALUES --> EXIBE UM ARRAY COM OS VALORES DO OBJETO
//OBJECT.ENTRIES --> EXIBE UM ARRAY DE ARRAYS COM AS CHAVES E OS VALORES DO OBJETO

console.log(objKeys)
console.log(objValues)
console.log(objEntries) 