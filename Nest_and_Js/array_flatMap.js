const lista = [
    {
        nome: 'Hugo',
        idade: 21,
        cartoes: ['1234', '1314']
    },
    {
        nome: 'Luis',
        idade: 22,
        cartoes: ['3214', '1654']
    },
    {
        nome: 'Rodrigo',
        idade: 23,
        cartoes: ['6532', '5423']
    },
    {
        nome: 'Marcus',
        idade: 24,
        cartoes: ['6574', '5648']
    },
    {
        nome: 'Tales',
        idade: 25,
        cartoes: ['3254', '9885']
    },
]

// Pegar um array e transfomar em unico 
// ver os valores de todos os cartoes
const cartoes = lista.flatMap((cartao) => cartao.cartoes);// converte a lista em uma lista de objetos simples

console.log(cartoes);
