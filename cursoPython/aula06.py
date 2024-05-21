# TRY/ EXCEPT
# TRY -> tentar executar o codigo
# EXCEPT -> (ocorreu agum erro ao tentar executar) caso não consiga executar o codigo, execute o que está dentro do except

# numero_str = input('Digite um numero: ')
# try: 
#     numero_float = float(numero_str)
#     print(f'FLOAT: {numero_float}')
#     print(f'O dobro de {numero_str} é {numero_float * 2}')
# except: # se caso acontecer algum erro dentro do try pula pro except
#     print("Isso não é um número")

# CONSTANTE = "Variaveis " que nao vao mudar
# muitas condições no if(ruim) muita complexidade (ruim)

velocidade = 50
local_carro = 100 

radar_1 = 60 # Velocidade maxima do radar 1 
local_1 = 100 # Local onde o radar 1 esta
radar_range = 1  # Distancia onde o radar pega

vel_carro_pas_radar_1 = velocidade - radar_1 # Velocidade do carro passando pelo radar 1
carro_passou_radar_1 =  local_carro >= (local_1 - radar_range) and local_carro <= (local_1 + radar_range) # Carro passou pelo radar 1
carro_multado_radar_1 = carro_passou_radar_1 and vel_carro_pas_radar_1 

if vel_carro_pas_radar_1:
    print('Velocidade carro passou do radar 1')

if carro_multado_radar_1:
    print("Carro multado no radar 1")


 