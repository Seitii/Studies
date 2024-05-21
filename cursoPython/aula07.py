try:
    numero = float(input('Digite um numero: '))
    nome = input('Digite seu nome: ')
    par_impar = numero % 2
    if par_impar == 0 and len(nome) <= 1:
        print(f'seu nome é curto')
        print('Numero é par')
    else:
        print('Numero é impar')

except:
    print('Isso não é um numero')

