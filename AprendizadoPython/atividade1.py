#CONSTRUTOR
#REPRESENTA AS CIDADES
import numpy as np

class Vertice:
  def __init__(self, rotulo, distancia_objetivo):
    self.rotulo = rotulo 
    self.visitado = False
    self.distancia_objetivo = distancia_objetivo
    self.adjacentes = []

  def adiciona_adjacente(self, adjacente):
    self.adjacentes.append(adjacente)

  def mostra_adjacente(self):
    for i in self.adjacentes:
      print(i.vertice.rotulo, i.custo)

#CLASSE ADJACENTE Q REPRESENTA A LIGAÇÂO DAS CIDADES
# IMPLEMENTAR A DISTANCIA DA CIDADE E OUTRA  ATÉ O OBJETIVO.
class Adjacente:
  def __init__(self, vertice, custo):
    self.vertice = vertice
    self.custo = custo
    self.distancia_aestrela = vertice.distancia_objetivo + self.custo

class Grafo:
    Porto_Uniao = Vertice('Porto Uniao', 203)
    Paulo_Frontin = Vertice('Zerind', 172)
    Canoinhas = Vertice('Oradea', 141)
    Tres_Barras = Vertice('Sibiu', 131)
    Sao_Mateus_Do_Sul = Vertice('Timisoara', 123)
    Irati = Vertice('Lugoj', 139)
    Curitiba = Vertice('Mehadia', 0)
    Palmeira = Vertice('Dobreta', 59)
    Mafra = Vertice('Craiova', 94)
    Campo_Largo = Vertice('Rimnicu', 27)
    Balsa_Nova = Vertice('Fagaras', 41)
    Lapa = Vertice('Pitesti', 74)
    Tijucas_Do_Sul = Vertice('Bucharest', 56)
    Araucaria = Vertice('Giurgiu', 23)
    Sao_Jose_Dos_Pinhais = Vertice('Giurgiu', 13)
    Contenda = Vertice('Giurgiu', 39)

  Porto_Uniao.adiciona_adjacente(Adjacente(Paulo_Frontin, 46))
  Porto_Uniao.adiciona_adjacente(Adjacente(Irati, 75))
  Porto_Uniao.adiciona_adjacente(Adjacente(Sao_Mateus_Do_Sul, 87))

  Paulo_Frontin.adiciona_adjacente(Adjacente(Porto_Uniao, 46))
  Paulo_Frontin.adiciona_adjacente(Adjacente(oradea, 71))

  Canoinhas.adiciona_adjacente(Adjacente(Porto_Uniao, 78))
  Canoinhas.adiciona_adjacente(Adjacente(Tres_Barras, 12))
  Canoinhas.adiciona_adjacente(Adjacente(Mafra, 66))

  Sao_Mateus_Do_Sul.adiciona_adjacente(Adjacente(Porto_Uniao, 87))
  Sao_Mateus_Do_Sul.adiciona_adjacente(Adjacente(Tres_Barras, 43))
  Sao_Mateus_Do_Sul.adiciona_adjacente(Adjacente(Lapa, 60))
  Sao_Mateus_Do_Sul.adiciona_adjacente(Adjacente(Palmeira, 77))
  Sao_Mateus_Do_Sul.adiciona_adjacente(Adjacente(Irati, 57))

  Tres_Barras.adiciona_adjacente(Adjacente(Canoinhas, 12))
  Tres_Barras.adiciona_adjacente(Adjacente(Sao_Mateus_Do_Sul, 43))

  Irati.adiciona_adjacente(Adjacente(Paulo_Frontin, 75))
  Irati.adiciona_adjacente(Adjacente(Sao_Mateus_Do_Sul, 57))
  Irati.adiciona_adjacente(Adjacente(Campo_Largo, 55))

  Palmeira.adiciona_adjacente(Adjacente(Irati, 75))
  Palmeira.adiciona_adjacente(Adjacente(Sao_Mateus_Do_Sul, 77))
  Palmeira.adiciona_adjacente(Adjacente(Palmeira, 75))

  Campo_Largo.adiciona_adjacente(Adjacente(Palmeira, 55))
  Campo_Largo.adiciona_adjacente(Adjacente(Balsa_Nova, 22))
  Campo_Largo.adiciona_adjacente(Adjacente(Curitiba, 29))

  Balsa_Nova.adiciona_adjacente(Adjacente(Contenda, 19))
  Balsa_Nova.adiciona_adjacente(Adjacente(Campo_Largo, 22))
  Balsa_Nova.adiciona_adjacente(Adjacente(Curitiba, 51))

  Mafra.adiciona_adjacente(Adjacente(Canoinhas, 66))
  Mafra.adiciona_adjacente(Adjacente(Lapa, 57))
  Mafra.adiciona_adjacente(Adjacente(Tijucas_Do_Sul, 99))

  Lapa.adiciona_adjacente(Adjacente(Sao_Mateus_Do_Sul, 60))
  Lapa.adiciona_adjacente(Adjacente(Mafra, 57))
  Lapa.adiciona_adjacente(Adjacente(Contenda, 26))

  Contenda.adiciona_adjacente(Adjacente(Lapa, 26))
  Contenda.adiciona_adjacente(Adjacente(Balsa_Nova, 19))
  Contenda.adiciona_adjacente(Adjacente(Araucaria, 18))

  Araucaria.adiciona_adjacente(Adjacente(Curitiba, 37))
  Araucaria.adiciona_adjacente(Adjacente(Contenda, 18))

  Curitiba.adiciona_adjacente(Adjacente(Araucaria, 37))
  Curitiba.adiciona_adjacente(Adjacente(Balsa_Nova, 51))
  Curitiba.adiciona_adjacente(Adjacente(Sao_Jose_Dos_Pinhais, 15))
  Curitiba.adiciona_adjacente(Adjacente(Campo_Largo, 29))

  Tijucas_Do_Sul.adiciona_adjacente(Adjacente(rimnicu, 97))
  Tijucas_Do_Sul.adiciona_adjacente(Adjacente(Mafra, 99))

  Sao_Jose_Dos_Pinhais.adiciona_adjacente(Adjacente(Curitiba, 15))
  Sao_Jose_Dos_Pinhais.adiciona_adjacente(Adjacente(Tijucas_Do_Sul, 49))


#VETOR ORDENADO
class VetorOrdenado:
  
  def __init__(self, capacidade): #CONSTRUTOR
    self.capacidade = capacidade
    self.ultima_posicao = -1
    # MUDANÇA NO TIPO DE DADOS 
    self.valores = np.empty(self.capacidade, dtype = object)

  #Referencia para o vertice e comparação com a distancia a estrela
  def insere(self, adjacente):
    if self.ultima_posicao == self.capacidade - 1:
      print("Capacidade Maxima Atingida")
      return
    posicao = 0
    for i in range(self.ultima_posicao + 1 ):
      posicao = i 
      if self.valores[i].distancia_aestrela > adjacente.distancia_aestrela:
        break 
      if i == self.ultima_posicao:
        posicao = i + 1

    x = self.ultima_posicao
    while x >= posicao:
      self.valores[x + 1] = self.valores[x]
      x -= 1

    self.valores[posicao] = adjacente
    self.ultima_posicao += 1

  def imprime(self):
    if self.ultima_posicao == -1:
      print('O vetor está vazio')
    else:
      for i in range(self.ultima_posicao + 1):
        print(i, ' - ', self.valores[i].vertice.rotulo, ' - ', 
              self.valores[i].custo, ' - ', 
              self.valores[i].vertice.distancia_objetivo, ' - ',
              self.valores[i].distancia_aestrela)  
        

class AEstrela:
  def __init__(self, objetivo):
    self.objetivo = objetivo
    self.encontrado = False

  def buscar(self, atual):
    print('-------')
    print(f'Atual: {atual.rotulo}')
    atual.visitado = True
  
    if atual == self.objetivo:
      self.encontrado = True
    else:
      vetor_ordenado = VetorOrdenado(len(atual.adjacentes))
      for adjacente in atual.adjacentes:
        if adjacente.vertice.visitado == False:
          adjacente.vertice.visitado = True
          vetor_ordenado.insere(adjacente)
      vetor_ordenado.imprime()

      if vetor_ordenado.valores[0] != None:
        self.buscar(vetor_ordenado.valores[0].vertice) #CHAMADA RECURSIVA

busca_aestrela = AEstrela(grafo.bucharest) #OBJETIVO 
busca_aestrela.buscar(grafo.arad) # PONTO INICIAL( PODE SER QUALQUER 1 ) 