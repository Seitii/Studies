#Encapsulamento privado
# def __ ATRIBUTO PRIVADO coloca-se __ 
# Contexto dentro da classe, Objeto fora do contexto e nao utiliza o privado. 

class Calculadora: 

    def calcular(self, op, num1, num2): 
        if op == '+':
            return self.__adicionar(num1, num2)   # METODO PRIVADO
        elif op == '-':
            return self.subtrair(num1, num2)
        else:
            print("Operação invalida")

    def __adicionar(self, num1, num2): # metodo privado
        return num1 + num2
    
    def __subtrair(self, num1, num2):
        return num1 + num2

calculadora = Calculadora()
resultado = calculadora.calcular('+', 3, 2)
print(resultado)
resultado = calculadora.calcular('-', 5, 2)
print(resultado)
