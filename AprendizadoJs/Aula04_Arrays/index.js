
// Pode ser utilizado o const nos valores mutaveis(array e objetos), assim os dados podem ser alterados.
// mas precisa ser igual
// A UNICA COISA Q NAO É POSSIVEL É REATRIBUIR VALOR A VARIAVEL.

const aluno = ['Luiz', 'Maria', 'João'];
console.log(aluno[0]); // Luiz
console.log(aluno[1]); // Maria
console.log(aluno[2]); // João
console.log(aluno[3]); // undefined
aluno[0] = 'Eduardo';
console.log(aluno); // agora é Eduardo
aluno[3] = 'Luiza'; // Adiciona a luiza no final do array
console.log(aluno); 

// saber o tamanho da lista
console.log(aluno.length);

// ADICIONAR ELEMENTO NO FINAL DA ARRAY
aluno[aluno.length] = 'Luiza';
aluno[aluno.length] = 'Fabio';
aluno[aluno.length] = 'Luana';
console.log(aluno);

// METODO MAIS UTILIZADO PARA ADICONAR ELMENTO NO FINAL
aluno.push('Hugo');
aluno.push('Pedro');
console.log(aluno);


// METODO MAIS UTILIZADO PARA ADICONAR ELMENTO NO COMEÇO

aluno.unshift('Luis');
aluno.unshift('Luisa');

// METODO MAIS UTILIZADO PARA REMOVER ELMENTO E O INDICE NO FINAL
const removido = aluno.pop();

// METODO MAIS UTILIZADO PARA REMOVER ELMENTO NO COMEÇO
aluno.shift();

