const estudante = {
    nome: 'Pablo',
    idade: 20,
    cpf: '12345678901',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['11000000000', '11020200202'],
    enderecos: [{
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

const exibeTel = (tel1, tel2) => {
    console.log(`Ligar para ${tel1}`)
    console.log(`Ligar para ${tel2}`)
}

let teste = exibeTel(...estudante.telefones) //UTILZANDO O OPERADOR DE ESPALHAMENTO(SPREAD OPERATOR) PARA EXIBIR OS TELEFONES.


//SIMIULAÇÃO DE UM DESTINARIO
const dadosEnvio = {
    destinatario: estudante.nome,
    ...estudante.enderecos[0] //APLICANDO O SPREAD OPERATOR PARA UTILIZARMOS O ENDEREÇO QUE ESTA NA PRIMEIRA POSIÇÃO DE 'ENDEREÇOS' PRESENTE NO OBJ ESTUDANTE
}

console.log (dadosEnvio)