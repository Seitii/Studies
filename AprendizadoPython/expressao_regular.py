class Aluno:
    def __init__(self, nome, nota1, nota2):
        self.nome = nome
        self.nota1 = nota1
        self.nota2 = nota2
        self.media = 0.0

    def calcula_media(self):
        self.media = (self.nota1 + self.nota2) / 2
        return self.media
    
    def mostra_dados(self):
        print(f'Nome: {self.nome}')
        print(f'Nota1: {self.nota1}')
        print(f'Nota2: {self.nota2}')
        print(f'Media: {self.media}')

    def resultado(self):
        if self.media >=6:
            print('Aprovado')
        else:
            print('Reprovado')

a1 = Aluno('Joao', 7, 8)
a1.calcula_media()
print(a1.mostra_dados())
print(a1.resultado())

        