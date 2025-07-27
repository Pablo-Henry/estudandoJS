const animal = {
    som: 'faz barulho'
};

const cachorro = Object.create(animal); // 'cachorro' herda de 'animal'
cachorro.nome = 'Rex';

console.log(cachorro.nome); // Saída: Rex (propriedade própria)
console.log(cachorro.som);  // Saída: faz barulho (propriedade herdada de 'animal')