const estudantes = require('./estudantes.json');

//RECEBE UMA LISTA E UM PROPRIEDADE DA LISTA
const ordena = (lista, propriedade) => {
    return lista.sort((a, b) => {
        if (a[propriedade] < b[propriedade]) return -1  //VERIFICA SE O ITEM A É MENOR QUE O ITEM B, SE FOR O ITEM A VOLTA UMA CASA
        if (a[propriedade] > b[propriedade]) return 1  //VERIFICA SE O ITEM A É MAIOR QUE O ITEM B, SE FOR O ITEM A AVANÇA UMA CASA
        return 0  // Se os valores da propriedade forem iguais, a função retorna 0. Isso indica ao sort() que a ordem de a e b não importa, eles permanecem em suas posições relativas.
    })
}

//RECEBE A LISTA E A PROPRIEDADE NA QUAL DESEJA ORDENAR EX (ID, NOME, NÚMERO DE MATRÍCULA)
const listaOrdenada = ordena(estudantes, 'nome')

console.log(listaOrdenada);

//ORENDENANDO UMA LISTA EM ORDEM ALFABÉTICA CONSIDERANDO OS NOMES DOS ESTUDANTES