const texto1 = 'Pablo'
const texto2 = "Aline"
const texto3 = `Ananda`

console.log(texto1)
console.log(texto2)
console.log(texto3)

//tipos de  CONCATENAÇÃO
console.log('Meu nome é ' + texto1);
console.log(`Seu nome é ${texto3}`); // a crase é utilizada para strings e para concatenação de texto



const citacao = "Nada é permanente, exceto a mudança 'Heráclito de Éfeso'"; //JS aceita aspas duplas junto de aspas simples
const citacao2 = `"Uma vida sem reflexão não vale a pena ser vivida 'Sócrates' " `;  //JS aceita aspas duplas junto de aspas simples e crase

console.log(citacao);
console.log(citacao2);

const teste = 'NÃO GRITE';
const teste2 = 'não grite';
console.log(teste.toLowerCase())  //transforma o texto em minusculo
console.log(teste.toUpperCase()) //transforma o texto em maiusculo

let nome;
let idade = null

console.log(nome)
console.log(idade)

let nome1 = "Pablo";
let idade2 = 20;
let estaChovendo = true;

let mensagem = `Olá, meu nome é ${nome1} e tenho ${idade2} anos. Está chovendo? ${estaChovendo}`;

console.log(mensagem);


const numero = '8'
const texto = 8

console.log(parseInt(numero))
console.log(Number(numero))
console.log(String(texto))