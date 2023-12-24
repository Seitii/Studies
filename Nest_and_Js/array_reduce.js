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

// 2 tipos: Array de resposta e Array de chave
// Converte a array para um objeto só 

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

const pessoasArray = lista.reduce((acc, objeto) => {
    acc.push(objeto.idade);
    return acc;
}, []);

console.log(pessoas);
console.log(pessoas.Tales.idade);
console.log(pessoasArray);