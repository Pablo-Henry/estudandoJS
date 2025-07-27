
const estudante = require('./estudante.json')


//CONVERTE UM JSON EM STRING
const estudanteString = JSON.stringify(estudante);
console.log(estudanteString);
console.log(typeof estudanteString); // saída: string

//DESEMPACOTA O CONTEÚDO E O TRANSFORMA EM SUA FORMA ORIGINAL. EX: estudanteString -> é um objeto que foi transformado em string, O JSON.PARSE IDENTIFICA ISSO E CONVERTE O CONTEÚDO PARA OBJETO NOVAMENTE
const estudanteObj = JSON.parse(estudanteString)
console.log(estudanteObj);
console.log(typeof estudanteObj); //saída: object


