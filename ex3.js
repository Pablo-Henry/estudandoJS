//1
const exibeNome = ( nome ) => {
    return `Olá ${nome}, seja bem vindo(a)`;
};

console.log(exibeNome('Aline'));

//2
const validaIdade = ( idade ) => {
    if( idade < 18 ) {
        return true;
    } else{
        return false;
    };
};

console.log(validaIdade(8));
console.log(validaIdade(18));

//3

const encontraMaiorNumero = ( num1, num2, num3 ) => {
    if ( num1 >= num2 && num1 >= num3) {
        return num1;

    } else if ( num2 >= num1 && num2 >= num3 ) {
        return num2;

    } else{
        return num3;
    };
};

const exibeMaiorNum = encontraMaiorNumero(8, 88, 888)

console.log(exibeMaiorNum)


