function soma(x,y){
    if(
        typeof x !== 'number' || y !== 'number'
    ){
        throw new Error('x e y precisam ser números.');
    }

    return x + y
}

try{
    // Executado quando NÃO há erros.
    console.log(soma(1,2));
    console.log(soma('1', 2));
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo e gerou erro');
    console.log('Fechei o arquivo');
} catch(error){
    // Executado quando HÁ erros.
    console.log('Alguma coisa mais amigavel para o usúario.');
    console.log('Tratando o erro');
} finally{
    console.log('FINALLY: eu sempre sou executado');
}


function retornaHora(data){
    if (data && !(data instanceof Date)){
        throw new TypeError('Esperanddo instância de Date. ');
    }

    if (!data){
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try{
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora();
    console.log(hora);
} catch(e){
    // trata o erro
    // console.log(e)
} finally{
    console.log('Tenha um bom dia.');
}