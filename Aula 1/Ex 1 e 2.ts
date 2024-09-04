// Exercício 1
// Objetivo: Trabalhar com interfaces e tipos de união.
//Defina uma interface chamada Produto, que contenha as propriedades nome (string), preco (number) e categoria (string).
//Defina um tipo de união chamado FormaPagamento, que pode ser 'dinheiro', 'cartão' ou 'pix'.
//Crie uma função que receba um objeto do tipo Produto e o tipo de pagamento, e retorne uma mensagem contendo as informações do produto e a forma de pagamento escolhida.

//Excercício 2
//Objetivo: Utilizar interseção de tipos.
//Defina dois tipos: Pessoa e Empregado. O tipo Pessoa deve conter as propriedades nome (string) e idade (number). O tipo Empregado deve conter as propriedades empresa (string) e salario (number).
//Usando interseção de tipos, crie um tipo que combine Pessoa e Empregado.
//Crie uma função que receba um objeto desse tipo combinado e retorne uma mensagem que descreva o nome, idade, empresa e salário da pessoa.

interface Produto {
    nome: string;
    preco: number;
    categoria: string;
}

type FormaPagamento = 'dinheiro' | 'cartão' | 'pix';

function exibirProdutoComPagamento(produto: Produto, pagamento: FormaPagamento): string {
    return `Produto: ${produto.nome}, Categoria: ${produto.categoria}, Preço: R$${produto.preco.toFixed(2)}, Forma de Pagamento: ${pagamento}.`;
}

//Ex
const produtoExemplo: Produto = { nome: 'Nintendo Switch', preco: 4500, categoria: 'Eletrônicos' };

const formaPagamentoExemplo: FormaPagamento = 'cartão';
console.log(exibirProdutoComPagamento(produtoExemplo, formaPagamentoExemplo));


type Pessoa = {
    nome: string;
    idade: number;
};

type Empregado = {
    empresa: string;
    salario: number;
};

// Exercício 2

//2.2
//Objetivo: Criar uma classe e uma subclasse usando herança.
//Crie uma classe chamada Funcionario, com as propriedades nome (string), cargo (string) e salario (number).
//Adicione um método que retorne uma descrição do funcionário.
//Crie uma subclasse chamada Gerente, que herda de Funcionario e adiciona a propriedade departamento (string).
//Adicione um método na classe Gerente que retorne uma descrição detalhada, incluindo o departamento que o gerente supervisiona.

class Funcionario {
    constructor(public nome: string, public cargo: string, public salario: number) { }

    descricao(): string {
        return `Funcionário: ${this.nome}, Cargo: ${this.cargo}, Salário: R$${this.salario.toFixed(2)}`;
    }
}

class Gerente extends Funcionario {
    constructor(nome: string, cargo: string, salario: number, public departamento: string) {
        super(nome, cargo, salario);
    }

    descricaoDetalhada(): string {
        return `${super.descricao()}, Departamento: ${this.departamento}`;
    }
}

const gerenteExemplo = new Gerente('Marcelo', 'Sênior', 150000, 'Tecnologia');
console.log(gerenteExemplo.descricaoDetalhada());

//2.2
//Objetivo: Trabalhar com herança e sobrescrita de métodos.
//Crie uma classe chamada ContaBancaria com as propriedades titular (string) e saldo (number).
//Adicione um método exibirSaldo, que imprime o saldo atual da conta.
//Crie uma subclasse chamada ContaCorrente, que herda de ContaBancaria e adiciona a propriedade limiteCredito (number).
//Sobrescreva o método exibirSaldo na subclasse ContaCorrente para incluir o saldo mais o limite de crédito disponível.

class ContaBancaria {
    constructor(public titular: string, public saldo: number) { }

    exibirSaldo(): string {
        return `Titular: ${this.titular}, Saldo: R$${this.saldo.toFixed(2)}`;
    }
}
class ContaCorrente extends ContaBancaria {
    constructor(titular: string, saldo: number, public limiteCredito: number) {
        super(titular, saldo);
    }

    exibirSaldo(): string {
        const saldoTotal = this.saldo + this.limiteCredito;
        return `${super.exibirSaldo()}, Saldo Total com Crédito: R$${saldoTotal.toFixed(2)}`;
    }
}

const contaCorrenteExemplo = new ContaCorrente('Marcelo', 10000, 3000);
console.log(contaCorrenteExemplo.exibirSaldo());
