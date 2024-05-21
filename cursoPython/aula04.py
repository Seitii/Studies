# num = 1
# num2 = 2 
# if num >= num2: 
#     print(f'{num} é maior ou igual a {num2}')
# else:
#     print(f'{num} não é maior ou igual a {num2}')

entrada = input('[E] entrar, [S] sair: ')
senha_digitada = input('Digite a senha: ')
senha_permitida = '123456'
if entrada == 'E' and senha_digitada == senha_permitida:
    print('Entrada permitida')
else:
    print('Entrada negada')



# STRING SÃO ITERAVEIS.

nome = input('Digite seu nome: ')
encontrar = input('Digite a letra que deseja encontrar: ')

if encontrar in nome: 
    print(f'Encontrei a letra {encontrar} no seu nome {nome}')
else:
    print(f'Não encontrei a letra {encontrar} no seu nome {nome}')

