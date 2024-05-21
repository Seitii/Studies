"""
Listas em python ->> são mutáveis
Suporta vávios tipos de dados
Indice e fatiamento
Alguns metodos: APPEND, INSERT, POP, DEL, REMOVE, CLEAR, INDEX, COUNT, EXTEND
CRUD ->> Create, Read, Update, Delete
criar, ler, atualizar, deletar

imutavel copia o valor quando usa o sinal de =

mutavel aponta para o mesmo endereço de memoria quando usa o sinal de =
"""


lista_a = ['Hugo', 'Rodrigo', 1, True, 1.2]
lista_b = lista_a.copy()

lista_a[1] = 'tales'
print(lista_a)
print(lista_b)

lista_a.append('luis')

indices = range(len(lista_a))

for indice in indices:
    print(indice, lista_a[indice])