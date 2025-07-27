let idade = 17;

let podeDirigir = idade >= 18 ? "Sim, pode dirigir" : "Não, precisa esperar";

console.log(podeDirigir); // Saída: Não, precisa esperar

idade = 20;
podeDirigir = idade >= 18 ? "Sim, pode dirigir" : "Não, precisa esperar";

console.log(podeDirigir); // Saída: Sim, pode dirigir


const sexo = "F";
const saudacao = (sexo === "F") ? "Olá, Sra." : "Olá, Sr.";
console.log(saudacao); // Saída: Olá, Sra.

const nomeUsuario = ""; // Imagine que veio de algum lugar e pode ser vazio
const nomeParaExibir = nomeUsuario ? nomeUsuario : "Visitante";
console.log(nomeParaExibir); // Saída: Visitante

const outroNome = "Alice";
const outroNomeParaExibir = outroNome ? outroNome : "Visitante";
console.log(outroNomeParaExibir); // Saída: Alice


function pagar() {
    console.log("Pagamento realizado!"); 
}

function cancelar() {
    console.log("Pagamento cancelado."); 
}

const saldoSuficiente = true;
saldoSuficiente ? pagar() : cancelar(); // Saída: Pagamento realizado!