const h1 = document.querySelector('.container h1');
const data = new Date();

function getDiaDaSemana(diaSemana){
    const dias = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sabado'];
    return dias[diaSemana]
}

function getNomeMes(Mes){
    const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    return meses[Mes]
}

function CriaData(data){
    const diaSemana = data.getDay();
    const Mes = data.getMonth();

    const nomeDia = getDiaDaSemana(diaSemana);
    const NomeMes = getNomeMes(Mes)

    
    return (`${nomeDia}, ${data.getDate()} de ${NomeMes} de ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`)
}

//h1.innerHTML = `${nomeDia}, ${data.getDate()} de ${NomeMes} de ${data.getFullYear()} ${data.getHours()} ${data.getMinutes()}`
h1.innerHTML = CriaData(data);
