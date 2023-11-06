console.log("hello world!"); 
console.log('Meu nome é "Hugo", estou aprendendo JavaScript às', 10, "da manhã")
let nome1 = "Hugo"; // cria variavel que é modificavel
var nome2 = "Hugo"; // cria variavel que é modificavel   == não recomendavel 
const nome = "hugo"; // cria variavel que não é modificavel 
const sobrenome = "odajima";
const idade = 21;
const peso = 79;
const altura = 1.77;
let imc;
let anoNascimento;
imc = peso / (altura * altura) 
anoNascimento = 2023 - idade
console.log(nome, sobrenome, "tem", idade, "anos e pesa", peso, "kg", "nasceu em", anoNascimento, "e seu IMC é de", imc)
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`) // melhor jeito de exibir na tela

