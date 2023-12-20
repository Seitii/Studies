// Parametros da função
// Arguemntos sustenta todos os argumentos enviados.

// se tiver mais argumentos do que parametros vai retornar UNDEFINED

// arguments é uma variavel que aloca todos os parametros
function funcao(a,b,c){
    let total = 0;
    for (let argumento of arguments){
        total += argumento;
    }

    console.log(total, a, b, c);

}
funcao('1,2,3,4,5,6,7');


// estruturação e desestruturação
// Desestruturação de OBJETOS
function funcaoo({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade)
}
let obj = ({nome: 'Hugo', sobrenome: 'Seiti', idade: 30})
funcaoo({nome: 'Hugo', sobrenome: 'Odajima', idade: 20})

funcaoo(obj)



// rest operator == o parametro resto precisa ser o ultimo argumento == 3 pontinhos
// 3 pontinhos pega todos os valores 
function conta(operador, acumulador, ...numeros){
    for (let numero of numeros){
        if (operador == '+') acumulador += numero;
        if (operador == '-') acumulador += numero;
        if (operador == '/') acumulador += numero;
        if (operador == '*') acumulador += numero;
    }

    console.log(acumulador);
}

conta('+', 0, 20, 30, 40, 50)