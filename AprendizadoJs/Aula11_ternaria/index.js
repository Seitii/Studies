// encurtar o codigo (Substitui o IF / ELSE ) ----> ? (VALOR PARA VERDADEIRO) : ( VALOR PARA FALSO) 

const pontuacao = 999;
const nivelUsuario = pontuacao >= 1000 ? "usuarioVIp" : "usuario normal";
console.log(nivelUsuario);

if (pontuacao>= 1000){
    console.log("maior q mil");
}
else{
    console.log("menor q mil");
}

function formatarData(data){
    const dia = data.getDate();
    const mes = data.getMonth() + 1;
    const ano = data.getFullYear();
    const horas = data.getHours();
    const minutos = data.getMinutes();
    const segundos = data.getSeconds();
    return `${dia} \ ${mes} \ ${ano} \ ${horas} \ ${minutos} \ ${segundos}`
}


const data = new Date();
const dataBrasil = formatarData(data);
console.log(dataBrasil)