const produtos = require('./produtos.json');


const filtrarOrdenarProdutosPorPreco = (lista, valorMax) => {
    
    const filtraValorMax = lista.filter( (produto) => {
        return produto.preco <= valorMax 
    });

    filtraValorMax.sort( (a, b) => {
        if (a.preco < b.preco) return -1
        if (a.preco > b.preco) return 1
    })

    return filtraValorMax
}


let teste = filtrarOrdenarProdutosPorPreco(produtos, 800.00)

console.log(teste);


// Crie uma função chamada filtrarOrdenarProdutosPorPreco que recebe um valor máximo (maxPreco) como parâmetro e retorna um novo array contendo apenas os produtos cujo preço é menor ou igual ao valor máximo, ordenados em ordem crescente de preço.

// Utilize a função para filtrar e ordenar os produtos com um valor máximo específico e imprima no console o array resultante.
