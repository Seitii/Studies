const paragrafos = document.querySelector('paragrafos'); // pega o seletor paragrafo
const ps = paragrafos.querySelectorAll('p'); // pega o seletor da tag P

const estilosBody = getComputedStyle(document.body); // pega o estilo do body do css 
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody);

for (let p of ps){
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#FFFFFF';
}