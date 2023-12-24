class Alarme:
    def __init__(self, estado: bool) -> None:
        self.__estado = estado
    
    def get_estado(self) -> bool:
        return self.__estado  # Mostra o Estado

    def set_estado(self, valor: bool) -> None:
        self.__estado = valor  # Altera o Estado