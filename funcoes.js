//DECLARAÇÃO DE FUNÇÃO
function exibeNomeNota(nome, nota) {
    return `Nome do Aluno ${nome}, sua nota é ${nota}`;
};

const resultado = exibeNomeNota('Pablo', 8);

console.log(resultado);


//EXPRESSÃO DE FUNÇÃO
const estudanteReprovou = function (notaFinal, faltas) {
    if( notaFinal < 7 && faltas > 4 ){
        return true;
    } else{
        return false;
    };
};

console.log(estudanteReprovou(5, 8));

console.log(estudanteReprovou(10, 2));

//ARROW FUNCTION

const exibeFaltas = ( faltas ) => {
    return faltas;
};

console.log(exibeFaltas(5));

//FORMATO SUPRIMIDO DA FUNÇÃO ACIMA TAMBÉM NO FORMATO DE ARROW FUNCTION
/*const exibeFaltas = ( faltas ) => faltas*/

