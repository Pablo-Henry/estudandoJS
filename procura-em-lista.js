const alunos = ['aline', 'pablo', 'laura', 'miguel', 'ananda', 'ellie', 'tommy', 'dina', 'jesse', 'joel']
const notas = [8, 8.5, 7, 9, 10, 5, 2, 3, 4.5, 6.5]

const lista = [alunos, notas]

function exibeNomeNota( aluno ) {
   // SE O ALUNO INF0RMADO ESTIVER INCLUIDO NA LISTA [ TAL ]
    if (lista[0].includes(aluno)) {
        const [ alunos, notas ] = lista  //DESESTRUTURAÇÃO DO ARRAY DE ARRAYS, SERVER PARA NÃO TER QUE USAR A POSICÃO DA LISTA COMO PARAMETRO UTILIZANOD O COLCHETE
        // PROCURA PELO NOME DO ALUNO NA LISTA E RETORNO A SUA POSIÇÃO NA LISTA / INDICE
        const indice = alunos.indexOf(aluno);
        //RETORNA A NOTA DO ALUNO DE ACORDO COM A CONSTANTE INDICE QUE USOU A FUNÇÃO INDEXOF
        const mediaAluno = notas[indice];

        console.log(`Aluno: ${aluno}  ||  Nota: ${mediaAluno}`);

    } else {
        console.log('Aluno não cadastrado')
    }
}

exibeNomeNota( 'ananda' )
exibeNomeNota( 'henry' )







// const alunos = ['aline', 'pablo', 'laura', 'miguel', 'ananda', 'ellie', 'tommy', 'dina', 'jesse', 'joel'];
// const notas = [8, 8.5, 7, 9, 10, 5, 2, 3, 4.5, 6.5];

// const lista = [alunos, notas]

// const exibeNomeNota = ( aluno ) => {

//     if (lista[0].includes(aluno)) {
//         const indice = lista[0].indexOf( aluno );
//         const mediaAluno = lista[1][indice]

//         console.log(`Aluno: ${aluno}  ||  Nota: ${mediaAluno}`)
//     } else {
//         console.log('Aluno não matriculado')
//     }
        
// }

// exibeNomeNota('ellie')











