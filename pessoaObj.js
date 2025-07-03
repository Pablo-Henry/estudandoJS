
//RESOLUÇÃO COM FOR IN
// const pessoa = {
//     nome: 'Pablo',
//     notas : [7, 8, 5, 4.5],  //MÉDIA = 6,125,
//     calcularMediaNotas: function () {
//         let somaDasNotas = 0
//         for (let nota in this.notas) {
//             somaDasNotas += this.notas[nota]
//         }
//         const media = somaDasNotas / this.notas.length
//         console.log(`a média é ${media}`)
//     }
// }


// pessoa.calcularMediaNotas()

//RESOLUÇÃO COM FOR OF
const pessoa = {
    nome: 'Pablo',
    notas : [7, 8, 5, 4.5],  //MÉDIA = 6,125,
    calcularMediaNotas: function () {
        let somaDasNotas = 0
        for (let nota of this.notas) {
            somaDasNotas += nota
        }
        const media = somaDasNotas / this.notas.length
        return media
    },

    classificarDesempenho: function (media) {
        if (media >= 9) {
            return `Desempenho Excelente!`
        }
        if (media >= 7.6 && media <=8.9) {
            return `Bom Desempenho`
        }
        if (media >= 6 && media <=7.5) {
            return `Desempenho Regular`
        }
        if (media < 6) {
            return `Desempenho Insuficiente`
        } 
        
    }
}


let mediaTeste = pessoa.calcularMediaNotas()

let teste = pessoa.classificarDesempenho(mediaTeste)  

console.log(teste)


// 1 - Crie um objeto chamado pessoa que represente informações sobre uma pessoa. O objeto deve ter as seguintes propriedades: nome e notas. Adicione um método chamado calcularMediaNotas ao objeto pessoa. Este método deve calcular a média das notas da pessoa.

// Adicione um método chamado classificarDesempenho ao objeto pessoa. Este método deve retornar uma categoria de desempenho com base na média calculada. Utilize as seguintes categorias:

// Desempenho excelente: média >= 9
// Bom desempenho: 7.5 <= média entre 7.6 e 8.9
// Desempenho regular: 6 <= média entre 6 e 7.5
// Desempenho insuficiente: média < 6
// Chame o método calcularMediaNotas para calcular a média das notas da pessoa e imprima no console a média calculada.

// Chame o método classificarDesempenho e imprima no console a categoria de desempenho da pessoa.