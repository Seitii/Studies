""""
class Cachorro: 

    #init == Metodo especial, permite instanciar o objeto exatamente quando ele é criado! passa todos os metodos criados aqui.
    def __init__(self, nome, idade):
        self.nome = nome
        self.idade = idade
        #CRIAMOS O ATRIBUTO SELF.NOME, DA CLASSE CACHORRO
    
    # GET == PEGA o valor passado
    def get_nome(self):
        return self.nome
    
    
    def get_idade(self):
        return self.idade

    # SET == define algo no atributo
    def set_age(self, idade):
        self.idade = idade

d = Cachorro("Tom", 20)
d.set_age(23)
print(d.get_nome())
print(d.get_idade())
"""

"""

# EXEMPLO 1 
class Estudante:
    def __init__(self, nome, idade, nota):
        self.nome = nome
        self.idade = idade
        self.nota = nota # 0 - 100

    #METODO que retorna a nota.
    def get_nota(self):
        return self.nota

class Curso:
    def __init__(self, nome, max_estudantes):
        self.nome = nome
        self.max_estudantes = max_estudantes
        self.estudantes = [] 
    
    #METODO DE ADICIONAR OS ESTUDANTES
    def add_estudante(self, estudante):
        if len(self.estudantes) < self.max_estudantes:
            self.estudantes.append(estudante)
            return True
        return False

    def get_media_nota(self):
        valor = 0
        for estudante in self.estudantes:
            valor += estudante.get_nota()

        return valor / len(self.estudantes)
    
s1 = Estudante("Pedro", 19, 80)
s2 = Estudante("Joao", 20, 70)
s3 = Estudante("Mario", 25, 55)

curso = Curso("Computação", 2)
curso.add_estudante(s1)
curso.add_estudante(s2)
print(curso.get_media_nota())
""" 

#EXEMPLO 2 
# HERANÇA
class Pet: 
    def __init__(self, nome, idade):
        self.nome = nome
        self.idade = idade

    def mostrar(self):
        print(f"eu sou {self.nome} e eu tenho {self.age} idade")
    
class Cat(Pet):
    def falar(self):
        print("Miau")
    
class Dog(Pet):
    def falar(self):
        print("Auau")
    
p = Pet("Tom", 19)
p.mostrar()
c = Cat("Bill", 20)
c.mostrar()