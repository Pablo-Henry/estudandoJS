const objPessoa = [
    {
    nome: 'Aline Souto',
    idade: 20,
    sexo: 'feminino',
    telefone: '(00) 00000-0000',
    cpf: '00000000000'
    },

    {
    nome: 'Pablo Henry',
    idade: 20,
    sexo: 'masculino',
    telefone: '(00) 00000-0000',
    cpf: '00000000000'
    },
    
    {
    nome: 'Ananda',
    idade: 0,
    sexo: 'feminino',
    telefone: '(00) 00000-0000',
    cpf: '00000000000'
    }
]

//COPIANDO OBJETOS: 

const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20"
}

//UTILIZAMOS O MÉTODO OBJECT.CREATE PARA CRIAR UM CÓPIA DE OBJPERSONAGEM.
const objPersonagem2 = Object.create(objPersonagem)
objPersonagem2.nome = "Saruman"

console.log(objPersonagem.nome) //Gandalf
console.log(objPersonagem2.nome) //Saruman

//SE APENAS ATRIBUIRMOS O OBJPERSONAGEM A UMA OUTRA FUNÇÃO ESTAREMOS APENAS CRIANDO UMA REFÊRENCIA DO OBJETO
//EX:



const objPersonag2 = objPersonagem


objPersonag2.nome = "Saruman"

//QUANDO TENTAMOS MUDAR O NOME DO PERSONAGEM 2 O NOME DO PRIMEIRO TAMBÉM IRÁ MUDAR, POIS O PERSONAGEM DOIS ESTA PASSANDO APENAS A REFERÊNCIA DO PRIMEIRO PERSONAGEM
console.log(objPersonagem.nome) //Saruman
console.log(objPersonag2.nome) //Saruman