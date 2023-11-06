// função auto invocada -> IIFE
function meuEscopo(){
    // seleciona o escopo para o HMTL
    const form = document.querySelector('.form'); // seleciona os elementos
    const resultado = document.querySelector('.resultado');
    
    const pessoas = []


    // 
    function recebeEventoForm(evento){
        evento.preventDefault(); // mostra oque aconteceu na tela.
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        // Adiciona os valores do forumlario dentro do ARRAY. 
        pessoas.push({
            nome: nome.value, // pega o valor "nome" q foi digitado no FORMULARIO
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);

        // adiciona o resultado nessa div "RESULTADO" 
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`
    }

    form.addEventListener('submit', recebeEventoForm); // adiciona um escutador de evento no formualario
}

meuEscopo();