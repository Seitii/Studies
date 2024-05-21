# FORMATAÇÃO DE STRINGS
nome = 'hugo'
idade = 21
altura = 1.77
peso = 78 
imc = peso / altura ** 2

linha_1 = f'{nome} tem `{idade} anos de idade, sua altura é {altura}'
linha_2 = f'seu peso é {peso}kg, seu IMC é {imc:.2f}'
print(linha_1)
print(linha_2)

