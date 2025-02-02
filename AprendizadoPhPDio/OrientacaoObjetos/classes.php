<? 

/*
    Classes = Definição de um Objetos da vida real.
    Objetos = Instância de uma classe. ( Pode ser acessada por métodos e propriedades)
    Propriedades/Atributos = Características do objeto.
    VIsibilidade = Public, Private, Protected.
    Métodos = Ações do objeto.
*/

class ContaBancaria // Classe
{
    public $banco;           //= 'Banco do Brasil'; // Propriedade
    public $nomeTitular;     //= 'Teste'; // Propriedade
    public $numeroAgencia;   //= '1234'; // Propriedade
    public $numeroConta;     //= '123456-7'; // Propriedade
    public $saldo;           //= 1000; // Propriedade 
    private $senha;

    public function __construct($banco, $nomeTitular, $numeroAgencia, $numeroConta, $saldo, $senha) // Método
    {
        $this->banco = $banco;          // o $this é uma referência a própria classe.
        $this->nomeTitular = $nomeTitular;
        $this->numeroAgencia = $numeroAgencia;
        $this->numeroConta = $numeroConta;
        $this->saldo = $saldo;
        $this->senha = $senha;
    }

    public function exibirSaldo()
    {
        return 'Saldo: R$ ' . $this->saldo; // Método
    }

    public function depositar($valor)
    {
        $this->saldo += $valor;
        return 'Depósito de R$ ' . $valor . ' realizado!';
    }

    public function sacar($valor)
    {
        $this->saldo -= $valor;
        return 'Saque de R$ ' . $valor . ' realizado!';
    }
}

$conta = new ContaBancaria(
    'Banco do Brasil',
    'Teste',
    '1234',
    '123456-7',
    1000,
    '1234'
); // Instância de uma classe

echo $conta->exibirSaldo();

echo $conta->depositar(1000);

echo $conta->exibirSaldo();

echo $conta->sacar(500);

echo $conta->exibirSaldo();


// Desafio 

class venda
{
    private $data;
    private $produto;
    private $quantidade;
    private $valorTotal;

    public function __construct($data, $produto, $quantidade, $valorTotal)
    {
        $this->data = $data;
        $this->produto = $produto;
        $this->quantidade = $quantidade;
        $this->valorTotal = $valorTotal;
    }

    public function dadosVenda()
    {
        return 'Data: ' . $this->data . '<br>Produto: ' . $this->produto . '<br>Quantidade: ' . $this->quantidade . '<br>Valor Total: R$ ' . $this->valorTotal;
    }

}

$venda = new venda(
    '01/01/2021',
    'Notebook',
    2,
    5000
);

echo $venda->dadosVenda();