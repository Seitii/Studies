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

// Map = Converte o tipo de array para outro tipo de array
const converterObjeto = (objeto) => {
    return objeto.nome
}

console.log(lista.map((objeto) => objeto.idade)); 
console.log(lista.map(converterObjeto)); 

