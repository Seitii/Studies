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

 const pessoa = lista.reduce((acc, objeto) => {
    return{
        ...acc, // ACC = Acumulador 
        [objeto.nome]:{
            idade: objeto.idade
        }
    }
},{});
console.log(pessoa);
console.log(pessoa.Tales.idade);

const funcaoReduce = (acc, objeto) => {
    return {
        ...acc,
        [objeto.nome]: {
            idade: objeto.idade
        }
    }
}

const pessoas = lista.reduce(funcaoReduce, {});

const chaves = Object.keys(pessoas);

const listaDeVolta = chaves.map((chave) => ({
    nome: chave, 
    idade: pessoas[chave].idade
}))


console.log(pessoas);
