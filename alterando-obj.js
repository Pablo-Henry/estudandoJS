const estudante = {
    nome: 'Pablo',
    idade: 20,
    cpf: '12345678901',
    turma: 'JavaScript',
}

//ALTERANDO O NOME DO ESTUDANTE
estudante.nome = 'Henry'

//ADICIONANDO UMA PROPRIEDADE QUE NÃO EXISTE
estudante.telefone = '(00) 00000-000'

console.log(estudante)


////////////////////////////////

const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
        nome: "Saruman",
        classe: "mago"
    },
    status: "desaparecido"
}

//DELETANDO CHAVE E VALOR DE UM OBJETO:

delete objPersonagem.aliado 
console.log(objPersonagem.aliado) //undefined