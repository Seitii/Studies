// Função para criar um OBJETO.
function criaPessoa(nome, sobrenome){
    return{nome, sobrenome};
}

const p1 = criaPessoa('Hugo', 'Odajima');


function falaaFrase(comeco){
    function falaResto(resto){
        return comeco + '' + resto;
    }
    return falaResto;

}

const fala = falaaFrase('Olá');
const resto = fala('mundo');

console.log(resto);