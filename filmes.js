const filmes = require('./filmes.json');

const filtrarFilmesPorAno = (lista, anoFilme) => {
    return lista.filter( (filme) => {
        if (anoFilme == filme.anoLancamento) {
            return filme
        }
    })
}


let testeCorreto = filtrarFilmesPorAno(filmes, 2013);
console.log(testeCorreto);

let testeCpmFalha = filtrarFilmesPorAno(filmes, 2013);
console.log(testeComFalha);

















// Crie uma função chamada filtrarFilmesPorAno que receba um ano como parâmetro e retorne um novo array contendo apenas os filmes lançados nesse ano.

// Utilize a função para filtrar os filmes lançados em um ano específico e imprima no console o array resultante. Em seguida, refaça a operação com outro ano.