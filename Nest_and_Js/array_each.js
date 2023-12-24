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

// for(let i = 0; i<lista.length; i++){
//     console.log(lista[i])
// }


lista.forEach((objeto) => console.log(objeto));

// lista.forEach((objeto) =>{
//     soma += objeto.idadde
// });

// for(let i = 0; i< lista.length; i++){
//     soma+= lista[i].idade
// }


// Melhor Metodo
let soma = 0

const somaIdade = (objeto) => {
    soma += objeto.idade
}

lista.forEach(somaIdade);

console.log("soma é: ", soma);