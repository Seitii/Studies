function DiadaSemana(diasemana){
    let diasemanaTexto;
    switch(diasemana){
        case 0:
            diasemanaTexto = 'Domingo';
            return diasemanaTexto;
        case 1:
            diasemanaTexto = 'Segunda';
            return diasemanaTexto;
        case 2:
            diasemanaTexto = 'Terça';
            return diasemanaTexto;
        case 3:
            diasemanaTexto = 'Quarta';
            return diasemanaTexto;
        case 4:
            diasemanaTexto = 'Quinta';
            return diasemanaTexto;
        case 5: 
            diasemanaTexto = 'Sexta';
            return diasemanaTexto;
        case 6:
            diasemanaTexto = 'Sabado';
            return diasemanaTexto;
        default: 
            diasemanaTexto = "Invalido"
    }
}


const data = new Date('2023-07-12 00:00:00');
let diasemana = data.getDay();
const diasemanaTexto = DiadaSemana(diasemana);
//diasemana = 3

console.log(diasemana, diasemanaTexto)