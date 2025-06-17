const estudante = {
    nome: 'Pablo',
    idade: 20,
    cpf: '12345678901',
    turma: 'JavaScript',
}



console.log(estudante)

console.log(`Nome do aluno: ${estudante.nome}`)

//EXIBE APENAS O 3 PRIMEIROS NÚMEROS DO CPF
//PARA EXIBIR O 3 PRIMEIROS DIGITOS DO CPF UTILIZEI O SUBSTRING -> O SUBSTRING É UM METÓDO QUE PODE SER UTILIZADO APENAS EM STRINGS
console.log(`3 primeiros digitos do cpf: ${estudante.cpf.substring(0,3)}`)
