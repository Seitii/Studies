// essa Função tem acesso a tem 3 escopos. 
// o closures é a variavel definida fora dela. acessa o escopo lexico

function retornaFuncao(){ // global
    const nome = 'Hugo'; // 'CORPO' mãe 
    return function(){ // 'CORPO'  função normal 
        return nome;
    };

}

const funcao = retornaFuncao();
console.dir(funcao);