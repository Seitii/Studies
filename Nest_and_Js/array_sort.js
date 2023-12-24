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
// Ele muda a ordem do objeto, reordena.


lista.sort((a, b) => {
    if (a.idade < b.idade){
        return -1;
    }
    if (a.idade > b.idade){
        return 1;
    }
    return 0;
});

console.log(lista);