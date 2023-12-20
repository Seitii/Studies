// function hoisting -> posso chamar a função antes de declarada ou depois de declarada.
falaOI();
function falaOI(){
    console.log('oi');
}

// First-class objects "'objetos de primeira classe" -> Pode ser tratado como um DADO
// Function Expression 
const souUmDado = function(){
    console.log('Sou um dado');
}
souUmDado();

function executaFuncao(funcao){
    console.log('Vou executar uma função a baixo');
    funcao();
}
executaFuncao(souUmDado);

// ARROW Function -> Declaração de função curta.
const funcaoArrow  = () => {
    console.log('sou uma função arrow');
}

funcaoArrow();


// dentro de um ojbeto
const obj = {
    falar: function(){
        console.log('Estou falando...');
    }
};
obj.falar();