const lista = [
    {
        nome: 'Hugo',
        idade: 21
    },
    {
        nome: 'Luis',
        idade: 22
    },
    {
        nome: 'Rodrigo',
        idade: 23
    },
    {
        nome: 'Marcus',
        idade: 24
    },
    {
        nome: 'Tales',
        idade: 25
    },
]

// some = PEga o array e faz testes boll ou false. 
// cada linha da array faz testes. 
// se caso der True. retorna verdadeiro.


// Every == "IF" - Todos precisam ser TRUE para ser verdadeiro 
// Some == "OU" -  

const resultadoSome = lista.some((objeto) => objeto.idade >50 );
const resultadoEvery = lista.every((objeto) => objeto.idade >= 10);

console.log("resultadoSome", resultadoSome);
console.log("ResultadoEvery", resultadoEvery);
