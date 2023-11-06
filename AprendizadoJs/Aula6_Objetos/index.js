// ARRAY = [] 
// OJBETO = {}
const pessoa1 = {
    nome: 'Hugo',
    sobrenome: 'Odajima',
    idade: 21,

    // METODOS
    fala() {
        console.log(`${this.nome} ${this.sobrenome} esta falando que tem ${this.idade} anos`);
    },

    incrementa() {
        ++this.idade;
    }

};

const pessoa2 = {
    nome: 'Rodrigo',
    sobrenome: 'Bauer',
    idade: 25
};

pessoa1.fala()
pessoa1.incrementa()
pessoa1.fala()
pessoa1.incrementa()
pessoa1.fala()
pessoa1.incrementa()
pessoa1.fala()


function criaPessoa(nome, sobrenome, idade){
    return {
        nome, sobrenome, idade,
    };

}

const pessoa3 = criaPessoa('Luis', 'Filipe', 21);
const pessoa4 = criaPessoa('Tales', 'Tales', 25);
const pessoa5 = criaPessoa('Marcos', 'Silva', 32);
console.log(pessoa3.nome, pessoa4.nome, pessoa5.nome,)


