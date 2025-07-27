const estudantes = require('./estudantes.json');

const buscaInfo = (lista, chave, valor) => {
    return lista.find((estudante) => estudante[chave].includes(valor))  
}

const estudanteEncontrado = buscaInfo(estudantes, 'nome', 'Way');

console.log(estudanteEncontrado);

const telefoneEncontrado = buscaInfo(estudantes, 'telefone', '9705299694');

console.log(telefoneEncontrado);
