

const array1 = [1, 2, 3, 4, 5]

const array2 = [6, 7, 8, 9, 10]

// FUNÇÃO CONCAT PARA JUNTAR (CONCATENAR) AS DUAS LISTAS
const concatenando = array1.concat(array2)
console.log(concatenando) 

//TESTANDO O CONCAT COM OUTRO TIPO DE DADO
const teste = 'aline'
const teste2 = 3

const teste3 = teste.concat(teste2)
console.log(teste3)


//FUNÇÃO SLICE PARA DIVIDIR O COTEUDO DE UMA LISTA.
const array3 = ['aline', 'pablo', 'laura', 'miguel', 'ananda', 'ellie', 'tommy', 'dina', 'jesse', 'joel']

const dividindo = array3.slice(0, 5)
console.log(dividindo)

//FUNCAO SPLICE PARA EXCLUIR UM ITEM DA LISTA E ADICIONAR OUTRO
const substituindo = array3.splice(8, 2, 'abby')

console.log(array3)
//MOSTRA OS EXCLUIDOS
console.log(substituindo)

//MATRIZ OU LISTA DE DUAS DIMENSÕES

const array4 = ['dexter', 'rita', 'cody', 'astor']

const array5 = ['henry', 'debra', 'biney']

//               []        [] EXEMPLO 1 DE MATRIZ
const array6 = [array4, array5]

console.log(array6[0][2])

//EXEMPLO 2 DE MATRIZ
const funcionarios = [
    ["Ana", "Juliana", "Leonardo"],
    [30, 35, 28]
];





