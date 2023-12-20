// IIFE = Expressão de função invocada imediatamente. 
(function(idade, peso, altura){
    const sobrenome = 'Hugo';
    function criaNome(nome){
        return nome + ' ' + sobrenome;
    }

    function falaNome(){
        console.log(criaNome('Luis'));
    }
    
    falaNome(idade, peso, altura);
})(30, 100, 171);
