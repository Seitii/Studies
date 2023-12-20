// for classico = Geralmente iteraveis ( arrays ou strings)
// for in = Retorna o índice ou chave ( String, array ou objetos)
// for of = Retorna o VALOR ( Iteraveis, arrays ou strings)

for (let i = 0; i <= 5; i++){
    console.log(`linha ${i}`);
}

const frutas = ['maça', 'pera', 'uva'];

for (let i = 0; i< frutas.length; i++){
    console.log(`Indice ${i}`, frutas[i]);
}

// Exercicios

const elementos = [ 
    {tag: 'p', texto: 'Qualquer texto que você quiser '},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'section', texto: 'Frase 3'},
    {tag: 'footer', texto: 'Frase 4'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++){
    let {tag, texto} = elementos[i];
    let tagCriada = document.createElement(tag);
    let textoCriado = document.createTextNode(texto);

    tagCriada.appendChild(textoCriado);
    div.appendChild(tagCriada);
}

container.appendChild(div);


// ESTRUTURA DE REPETIÇÃO FOR IN 
// objeto par de chave e valor
// retorna o indice => UTILIZADO COM OBJETOS.

const frutass = ['pera', 'maça', 'uva']; // vetor ou array de uma unica dimensão
 
for (let i in frutass){
    console.log(i);
    console.log(frutas[i]);
}

const pessoass = {
    nome: 'hugo',
    sobrenome: 'Odajima',
    idade: 30
};

console.log(pessoass.nome)
console.log(pessoass['nome'])

for (let chave in pessoass){
    console.log(chave, pessoa[chave]);
}


// ESTRUTURA DE REPETIÇÃO FOR OF
// Retorna o valor

for (let valor of pessoass){
    console.log(valor);
}


// recebe uma função q é o valor e o indice.
nomes.array.forEach(element => {
    
});