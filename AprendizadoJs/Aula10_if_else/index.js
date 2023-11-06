//const horas = prompt("digite as horas ");

const horas = 11;

if (horas >= 6 && horas <=11){
    console.log('Bom dia!');
} else if (horas >=12 && horas <=17){
    console.log('Boa tarde');
} else if (horas >=18 && horas <=0){
    console.log('Boa noite');
}else{
    console.log("digite um numero certo")
}