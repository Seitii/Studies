let i = 0; 

while ( i <= 10){
    console.log(i)
    i++;
}

function random(min, max){
    const r = Math.random() * (max - min ) + min;
    return r;
}

const min = 1;
const max = 50;
let rand = 10;

// checka a condição e executa o laço
while(rand !== 10){
    rand = random(min, max);
    console.log(rand);
}


// exedcuta o codigo e depois checka a condição. 
do{
    rand = random(min, max);
    console.log(rand);
}while(rand !== 10);

const nome = 'Hugo';

let indice = 0;

while (indice < nome.length){
    console.log(nome[i]);
    i++;
}

console.log('Segue a vida...');