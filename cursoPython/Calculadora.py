while True: 
    print(10*'=','Calculadora', 10*'=')
    numero1 = input('Digite um numero: ')
    numero2 = input('Digite outro numero: ')
    operador = input('Digite um operador: ')
    numero_valido = None
    operadores_permitidos = ['+', '-', '*', '/']
    
    

    try: 
        numero1 = float(numero1)
        numero2 = float(numero2)
        numero_valido = True

    except:
        numero_valido = None

    if numero_valido is None:
        print('Digite um numero valido')
        continue

    if operador not in operadores_permitidos and operador > 1:
        print(numero1 + numero2)
    elif operador == '-':
        print(numero1 - numero2)
    elif operador == '*':
        print(numero1 * numero2)
    elif operador == '/':
        print(numero1 / numero2)
    else:
        print('Operador invalido')
        continue

    sair = input('Deseja sair? [s]im ou [n]ão: ').lower()

    if sair != 'sim' or sair != sair.isdigit():
        print("Você escolheu continuar na calculadora")
        continue
    else:
        print('Você saiu da calculadora')