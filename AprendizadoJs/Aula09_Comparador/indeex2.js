/*
Operadores logicos

        && and -> E -> TODAS AS EXPRESSÕES PRECISAM SER VERDADEIRAS, PARA RETONAR VERDADE.
        || OR -> OU -> se alguma for verdadeira, retorna verdadeiro 
        ! NOT -> NÃO

        && -> false && true -> retorna falso, pq é o primeiro a ser encoontrado (retorna o VALOR )

        || -> 0 || false || null || 'hugo seiti' || true -> precisa só de 1 valor verdadeiro "Hugo"

        valores avaliados em false -> 0, " ", null, NaN, FALSY
*/
const expressao_AND = true && true && true && false;
console.log(expressao_AND)


const expressao_OR = false || false || false || true;
console.log(expressao_OR)

console.log('Hugo' && 0 && 'Luis') // retorna o falso
console.log('Hugo' && 'Seiti' && 'Luis') // retorna o ultimo

