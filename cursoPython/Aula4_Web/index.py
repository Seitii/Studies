from flask import Flask, render_template
from flask_socketio import SocketIO, send 
"""
Framework -> Flask -> Cria site

Ambiente virtual -> Local no seu computador com instalações especificas.   == VENV 

Passo 2 -> Criar o app

Passo 3 -> criar a primeira pagina (rota)

Passo 4 -> Roda o aplicativo

WebSocket -> tunel de conexão entre 2 pessoas que estão usando o site.
jquery -> javascript -> gerencia 

class == Identificador que pode existir em varios elementos, e pode formatar todos de uma vez.
id == UNICO, tenha um id do item para pagina inteiro.

Onde fica guardado as mensagens enviados pelo usuario -> Necessario conectar no banco de dados.
"""

app = Flask(__name__)
SocketIO = SocketIO(app, cors_allowed_origins= "*") # (TUNEL) permite qualquer pessoa q se conect ao socket se conecte.

#cria a funcionalidade de enivar mensagem
@SocketIO.on("message")
def gerenciar_mensagem(mensagem):
    send(mensagem, broadcast=True) # envia a mensagem para todos que estão conectado no tunel, e o broadcast coloca no tunel.


# Criar a primeira Pagina == Rota 
@app.route("/")   # define a rota e depois chama.   @ == decorator ( Atribui uma funcionalidade para o  que esta em baixo )
def home_page():
    return render_template("index.html")

# Roda o aplicativo
SocketIO.run(app, host="192.168.15.59")

