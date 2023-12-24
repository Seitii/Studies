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

const listaFiltrada = lista.filter(filtrarPessoa);

console.log(lista);

console.log(listaFiltrada);