// A função conhece onde ela foi declarada, tudo q esta declarada dentro dela. E oque esta no vizinho dela. 
// Ele busca a até a variavel global
const nome = 'Hugo';

function falaNome(){
    console.log(nome)
}

function usaFalaNome(){
    const nome = 'Luis';
    falaNome();
}
usaFalaNome();