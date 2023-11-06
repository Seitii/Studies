function soma(a, b){
    const resultado = a + b
    return resultado
}

console.log(soma(1,2));
console.log(soma(3,2));

// FUNÇÂO ANONIMA, FUNÇÂO DEntRO DA VARIAVEL
const raiz = function(n){
    return `a raiz de ${n} é ${n ** 0.5}`;
};

console.log(raiz(9))
console.log(raiz(25))
console.log(raiz(80))


// FUNÇÂO ARROW FUNCTION, USADA SÓ COM 1 parametro 
const raiz2 = m => m ** 0.5;
console.log(raiz2(9))
console.log(raiz2(25))
console.log(raiz2(80))