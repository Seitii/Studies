/*

PRIMITIVOS  ( VALORES IMUTAVEIS) = string, number, boolean, undefined, null == VALORES COPIADOS

REFERÊNCIA (MUTAVEIS) == Array, object, function == PASSADOS POR REFERENCIA

*/

let nome = 'Hugo';
nome[0] = 'R'; // não faz nenhuma alteração.
nome = 'Odajima';
console.log(nome[0], nome); // troca o nome da variavel.

let a = 'A';
let b = a; // realiza uma copia do valor de a. para variavel B.
// para copiar o valor de A dentro de B ====      let b = [...a]
console.log(a, b);

a = 'Outra coisa'
console.log(a, b);


 // PASSADO POR REFERENCIA


let num = [1, 2, 3]; 
let num2 = num; // B aponta para o mesmo valor da memoria de A 
let num3 = num2
console.log(num, num2);

num.push(4);
console.log(num, num2);

num2.pop();
console.log(num, num2);

num.push('hugo')
console.log(num3);



const pessoa = {
    nome: 'Hugo',
    sobrenome: 'Odajima'

};

const pessoa3 = {...pessoa}

const pessoa1 = pessoa;
pessoa.nome = 'Pedro';



console.log(pessoa3)
console.log(pessoa1)
