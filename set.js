const nomes = ['pablo','aline','pablo','aline','aline','ananda','laura','ananda'];


//REMOVENDO OS NOMES IGUAIS UTILIZANDO O SET - O SET NÃO FUNCIONA COMO UMA LISTA E SIM COMO UM CONJUTO, PARA UTILIZAR COMO LISTA NOVAMENTE DEVEMOS UTILIZAR O SPREAD OPERATOR

//EM CONJUNTOS NÃO PODEMOS REPETIR OS DADOS
const attNomes = new Set(nomes);


//UTILIZANDO O SPREAD OPERATOR PARA TRANSFORMAR EM LISTA NOVAMENTE.
const nomesAtualizados = [...attNomes];


//ENCURTANDO O PROCESSO: 

//DESTA FORMA NÃO É NECESSÁRIA A CRIAÇÃO DE OUTRA LISTA COMO A ATTNOMES
const nomesAtualizadosv2 = [...new Set(nomes)]

console.log(attNomes)
console.log(nomesAtualizados)
console.log(nomesAtualizadosv2)
