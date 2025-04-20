const notas = [8, 6.7, 5, 9, 3, 4.5]

let somaNotas = 0

//adicione o valor presente em notas na variável nota passando de um por um
for (let nota of notas) {
    somaNotas += nota
}

const media = somaNotas / notas.length

console.log( `A média é de ${media.toFixed(2)}` )


//EXIBE OS NOMES PRESENTES NA LISTA
const nomes = ['aline', 'pablo', 'laura', 'miguel', 'ananda', 'ellie', 'tommy', 'dina', 'jesse', 'joel']

for ( nome of nomes ) {
    console.log(nome)
}