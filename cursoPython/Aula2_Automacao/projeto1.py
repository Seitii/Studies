"""
                Passo a Passo do projeto

Passo 1 -> Entrar no sitema da empresa
    - Abrir o navegador
    - Entrar no link do sistema

Pssso 2 -> Fazer Login
    - 
Passo 3 -> Importar a base de produtos para cadastrar
Passo 4 -> Cadastrar um produto
Passo 5 -> Reetir o procecesso de cadastro até o fim.

#selenion == consegue usar a ID do campo.

"""
import pyautogui
import time
import pandas as pd

# pyautogui.write -> escrever um texto
# pyautogui.press -> apertar uma tecla
# pyautogui.click -> Clickar em algum lugar da tela
# pyautogui.hotkey -> Combinação de teclas.
pyautogui.PAUSE = 0.3

# abre o navegador 
pyautogui.press("win")
pyautogui.write("chrome")
pyautogui.press("enter")

pyautogui.write("https://dlp.hashtagtreinamentos.com/python/intensivao/login")
pyautogui.press("enter")
time.sleep(3)

pyautogui.press("tab")
pyautogui.press("tab")
pyautogui.press("enter")

# selecionar o campo de email
# pyautogui.click(x=717, y=399)
# pyautogui.press("click")
# pyautogui.write("hugoseiti@univem.edu.br")
# pyautogui.press("tab")
# pyautogui.write("karina123")
#pyautogui.click(x=935, y=546)

# Passo 3 -> importar a base de produtos para cadastrar.

tabela = pd.read_csv("Aula2_Automacao\produtos.csv")


for linha in tabela.index:
    print(linha)

    pyautogui.click(x=731, y=277)

    # pegar da tabela o valor do campo para ser preenchido
    codigo = tabela.loc[linha, "codigo"] # quando pegar o valor da tabela, pode ser qualqeur valor. 

    # preencher o campo 
    pyautogui.write(str(codigo)) # Write só funciona texto.
    pyautogui.press("tab")

    pyautogui.write(str(tabela.loc[linha, "marca"])) 
    pyautogui.press("tab")

    pyautogui.write(str(tabela.loc[linha, "tipo"])) 
    pyautogui.press("tab")

    pyautogui.write(str(tabela.loc[linha, "categoria"])) 
    pyautogui.press("tab")

    pyautogui.write(str(tabela.loc[linha, "preco_unitario"])) 
    pyautogui.press("tab")

    pyautogui.write(str(tabela.loc[linha, "custo"])) 
    pyautogui.press("tab")

    obs = tabela.loc[linha, "obs"]
    if not pd.isna(obs):  # verifica se a celula esta vazia
        pyautogui.write(str(tabela.loc[linha, "obs"])) 

    pyautogui.press("tab")
    pyautogui.press("enter")

    # scroll 
    pyautogui.scroll(5000)

