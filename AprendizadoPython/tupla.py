"""
Tuplas (tuple)

Tuplas são bastante parecidas com listas.

**************Existem basicamente duas diferenças basicas:

1 - As tuplas são representadas por parenteses ()

2 - As tuplas são imutaveis: Isso significa quee ao se criar uma tupla ela nao muda. Toda operação em uma tupla gera uma nova tupla.


# Cuidado 1: As tuplas são representadas por (), mas veja:

tupla 1 = (1,2,3,4,5,6,) -> É UMA TUPLA

tupla 2 = 1, 2, 3, 4, 5, 6 -> É UMA TUPLA 

tupla 3 = (4) -> NAO É TUPLA

tupla 4 = (4,) -> É UMA TUPLA



**********podemos gerar uma tupla dinamicamente com rangn(inicio, fim, passo)

tupla = tuple(range(11))
 


*************Desempacotamento de tupla
# GERA ERRO SE COLOCARMOS UM NUMERO DIFERENTE DE ELEMENTOS PARA DESEMPACOTAR.
tupla('Geek University", "programação em python essencial')

escola, curso = tupla

print(escola)
print(curso)


#METODOS PARA ADIÇÃO E REMOÇÃO DE ELEMENTOS NAS TUPLAS NÃO EXISTEM, DADO O FATO DAS TUPLAS SEREM IMUTAVEIS.
#TUPLAS SÃO IMUTAVEIS, MAS PODEMOS SOBRESCREVER SEUS VALORES


*********VERIFICA SE DETERMINADO ELEMENTO ESTA NA TUPLA

tupla = (1,2,3)

PRINT(3 in tupla)


******* ITERANDO SOBRE UMA TUPLA
tupla = (1,2,3)

for n in tupla:
    print(n)

for indice, valor in enumerate(tupla):
    print(indice, valor)

i = 0

while i < len(meses):
    print(meses[i])
    i += 1


*************  DEVEMOS UTILIZAR TUPLA SEMPRE QUE NAO PRECISAR MODIFICAR OS DADOS EM UMA COLEÇÃO

EXEMPLO -> MESES DO ANO

#VERIFICAMOS EM QUAL INDICE UM ELEMENTO ESTA NA TUPLA

#SE CASO O ELEMENTOO NAO EXISTIR, SERA GERADO ERROR

************
 - > Tuplas são mais rapidas do que listas

 - > Tuplas deixam seu codigo mais seguro

 - > Não tem o problema de shallow copy 
 
 - > Trabalhar com elementos mutaveis traz segurança para o codigo

"""
