const pessoa = {
    nome: 'Pablo',
    idade: 20,
    solteiro: false,
    hobbies: ['Ouvir música ', 'Jogar video game'],
    endereco: {
        rua: 'Barra Funda',
        cidade: 'Embu das Artes',
        estado: 'São Paulo - SP',
    }
};

const mostrarInfoPessoa = function(object) {
    console.log(`Chave: Nome | Tipo do Dado: ${typeof object.nome} | Valor: ${object.nome}`);
    console.log(`Chave: Idade | Tipo do Dado: ${typeof object.idade} | Valor: ${object.idade}`);
    console.log(`Chave: Solteiro | Tipo do Dado: ${typeof object.solteiro} | Valor: ${object.solteiro}`);
    console.log(`Chave: Hobbies | Tipo do Dado: ${typeof object.hobbies.join(', ')} | Valor: ${object.hobbies}`);
    console.log(`Chave: Endereco | Sub-Chave: Rua | Tipo do Dado: ${typeof object.endereco} | Valor: ${object.endereco.rua}`);
    console.log(`Chave: Endereco | Sub-Chave: Cidade | Tipo do Dado: ${typeof object.endereco} | Valor: ${object.endereco.cidade}`);
    console.log(`Chave: Endereco | Sub-Chave: Estado | Tipo do Dado: ${typeof object.endereco} | Valor: ${object.endereco.estado}`);
};

mostrarInfoPessoa(pessoa);


//Método join(): O método join() é um método de array que concatena todos os elementos de um array em uma única string. Ele aceita um argumento opcional: o separador que você deseja usar entre os elementos, seja um virgula, uma barra um hífen etc....



// 1 - Crie um arquivo chamado infoPessoa.js. Nesse arquivo, crie um objeto chamado pessoa que represente informações sobre uma pessoa. Este objeto deve ter as seguintes propriedades:

// nome (string): Nome da pessoa.
// idade (number): Idade da pessoa.
// solteiro (boolean): Indicador de estado civil (true se solteiro, false se casado).
// hobbies (array): Lista de hobbies da pessoa.
// Adicione valores a cada propriedade do objeto pessoa. Use valores fictícios para simular uma pessoa específica.

// Crie uma função chamada mostrarInfoPessoa que aceite o objeto pessoa como parâmetro e imprima todas as informações da pessoa no console, incluindo o tipo de dado de cada propriedade.

// No final do arquivo infoPessoa.js, chame a função mostrarInfoPessoa passando o objeto pessoa como argumento.

// Dica: você pode usar um método de array para retirar os elementos dos colchetes e exibi-los como texto.


// 2 - Adicione ao objeto pessoa uma nova propriedade chamada endereco. Esta propriedade deve ser um objeto representando o endereço da pessoa, com as seguintes subpropriedades:

// rua (string): nome da rua.
// cidade (string): nome da cidade.
// estado (string): nome do estado.
// Preencha as subpropriedades do objeto endereco com valores fictícios.

// Modifique a função mostrarInfoPessoa para incluir as informações do endereço da pessoa ao ser chamada.

// No final do arquivo infoPessoa.js, chame a função mostrarInfoPessoa para verificar se as informações atualizadas, incluindo o endereço, são exibidas corretamente no console.
