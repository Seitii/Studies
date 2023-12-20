// função que se chama de volta. 

function recursiva(max){
    console.log(max);
    if( max >= 10) return; // define um limite para função parar.
    max++;
    recursiva(max);
}

recursiva(-10);