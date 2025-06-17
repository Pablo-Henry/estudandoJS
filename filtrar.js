const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro']
const medias = [7, 4.5, 8, 7.5]


//RETORNA OS ALUNOS QUE POSSUAM OS NOMES COM TAMANHO MENOR QUE 4
// const tamanhoNome = alunos.filter((aluno) => {
//     return aluno.length < 4
// })

// console.log(tamanhoNome)


//RETORNA O ALUNO QUE POSSUI A NOTA MENOR QUE 7 - O RETORNO É FEITO PELO INDICE
const reprovados = alunos.filter((aluno, i) => {
    return medias[i] < 7
})

console.log(reprovados)

const notas = [10, 5, 7, 4, 8, 3];

const aprovados = notas.filter((nota) => nota >= 7);
console.log(aprovados);


