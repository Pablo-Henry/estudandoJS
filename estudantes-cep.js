const estudantes = require('./estudantes.json');

const filtraPropriedade = (lista, propriedade) => {
    return lista.filter((estudante) => {
        return !estudante.endereco.hasOwnProperty(propriedade)
    })
}

const estudantesSemCep = filtraPropriedade(estudantes, 'cep')
console.log(estudantesSemCep);


//RETORNA UMA LISTA COM OS ESTUDANTES QUE NÃO POSSUEM CEP NO ENDEREÇO