# FATIAMENTO DE STRNING
# [inicio:fim:passo]

# variavel = 'Olá Mundo'
# print(variavel[0:len(variavel):5])
# print(variavel[0:9:2])

nome = input('Digite seu nome: ')
idade = int(input('Digite sua idade: '))
if nome and idade:
    print(f'{nome} tem {idade} anos')
    print(f'seu nome invertido é {nome[::-1]}')
    print(f'seu nome contém ou não espaços {nome.isspace()}')
    print(f'seu nome tem {len(nome)} letras')
    print(f'A primeira letra do seu nome é {nome[0]}')
    print(f'A ultima letra do seu nome é {nome[-1]}')
else:
    print(f'Desculpe, você deixou diversoss campos vazios')

