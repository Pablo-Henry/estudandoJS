const biblioteca = require('./biblioteca.json');


const filtraLivros = (lista, id) => {
    return lista.filter( (livro) => {
        if( id == livro.id) {
            return livro
        }    
    })
}

let exibeLivrosComId = filtraLivros(biblioteca, 4)
console.log(exibeLivrosComId);

let exibeLivrosSemId = filtraLivros(biblioteca, 6)
console.log(exibeLivrosSemId);









// Crie uma função chamada encontrarLivroPorId que receba o id de um livro como parâmetro e retorne o objeto do livro correspondente. Se nenhum livro for encontrado, a função deve retornar null.

// Utilize a função para encontrar um livro com um id existente e imprima no console as informações do livro encontrado. Em seguida, utilize a função para encontrar um livro com um id inexistente e imprima no console uma mensagem indicando que o livro não foi encontrado.
