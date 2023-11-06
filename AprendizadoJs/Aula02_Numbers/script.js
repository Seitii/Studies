const numero = Number(prompt('Digite um número: '));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');
// em html não podemos ter dois elementos com o mesmo id, por isso usamos o querySelector

numeroTitulo.innerHTML = numero; // innerHTML é o conteúdo dentro da tag
texto.innerHTML = '';
texto.innerHTML += `<p> Raiz Quadrada é ${numero**0.5}</p>`;
texto.innerHTML += `<p> É NaN: ${numero-2}</p>`;
texto.innerHTML += `<p> Arredondando para baixo é ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p> Arredondando para cima é ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p> Com duas casas decimais ${numero.toFixed(2)}</p>`;