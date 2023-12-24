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

// Converte o array para 1 objeto e ele é tratado

const buscarPessoa = (pessoa) => pessoa.nome === "Marcus";

const novaPessoa = lista.find(buscarPessoa);

console.log(novaPesosa);

