def imprimir_titulo(superior, inferior):
    largura_titulo = 40  # Largura máxima do título
    linha = "*" * largura_titulo

    # Centralizar as partes superior e inferior
    superior_centralizado = superior.center(largura_titulo)
    inferior_centralizado = inferior.center(largura_titulo)

    # Imprimir o título formatado
    print(linha)
    print(superior_centralizado)
    print(inferior_centralizado)
    print(linha)

# Entrada do usuário
parte_superior = input("Digite a parte superior do título: ")
parte_inferior = input("Digite a parte inferior do título: ")

# Chamar a função para imprimir o título formatado e centralizado
imprimir_titulo(parte_superior, parte_inferior)
