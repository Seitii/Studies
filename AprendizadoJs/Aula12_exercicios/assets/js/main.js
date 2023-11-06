const h1 = document.querySelector('.container h1');
const data = new Date();

function getDiaDaSemana(diaSemana){
    let diadaSemanaTexto;

    switch(diaSemana){
        case 0:
            diadaSemanaTexto = 'Domingo';
            return diadaSemanaTexto;
        case 1:
            diadaSemanaTexto = 'Segunda-feira';
            return diadaSemanaTexto;
        case 2:
            diadaSemanaTexto = 'Terça-feira';
            return diadaSemanaTexto;
        case 3: 
            diadaSemanaTexto = 'Quarta-feira';
            return diadaSemanaTexto;
        case 4: 
            diadaSemanaTexto = 'Quinta-feira';
            return diadaSemanaTexto;
        case 5:
            diadaSemanaTexto = 'Sexta-feira';
            return diadaSemanaTexto;
        case 6:
            diadaSemanaTexto = 'Sabado';
            return diadaSemanaTexto;
        default:
            diadaSemanaTexto = 'invalido';
            return diadaSemanaTexto
    }
}

function getNomeMes(Mes){
    let NomeMes;

    switch(Mes){
        case 0:
            NomeMes = 'Janeiro';
            return NomeMes;
        case 1:
            NomeMes = 'Fevereiro';
            return NomeMes;
        case 2:
            NomeMes = 'Março';
            return NomeMes;
        case 3:
            NomeMes = 'Abril';
            return NomeMes;
        case 4:
            NomeMes = 'Maio';
            return NomeMes;
        case 5:
            NomeMes = 'Junho';
            return NomeMes;
        case 6:
            NomeMes = 'Julho';
            return NomeMes;
        case 7:
            NomeMes = 'Agosto';
            return NomeMes;
        case 8:
            NomeMes = 'Setembro';
            return NomeMes;
        case 9:
            NomeMes = 'Outubro';
            return NomeMes;
        case 10:
            NomeMes = 'Novembro';
            return NomeMes;
        case 11:
            NomeMes = 'Dezembro';
            return NomeMes;
        default:
            NomeMes = 'não tem';
            return NomeMes;
    }
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
