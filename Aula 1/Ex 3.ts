//Exercício 3

//3.1:
//Objetivo: Organizar o código usando módulos.
//Crie um módulo chamado Cliente.ts, que exporta uma classe Cliente com as propriedades nome (string) e email (string).
//Crie um segundo módulo chamado Pedido.ts, que importará a classe Cliente e adicionará a classe Pedido, com as propriedades cliente (objeto do tipo Cliente), produto (string) e valor (number).
//Instancie objetos da classe Pedido e crie uma função que exiba o nome do cliente, o produto e o valor total do pedido.

//3.2:
//Objetivo: Utilizar namespaces para organizar o código.
//Crie um namespace chamado Financeiro, que contenha duas funções: calcularImposto (recebe o valor e a taxa de imposto) e calcularDesconto (recebe o valor e a taxa de desconto).
//Dentro do namespace, adicione uma classe Orcamento, com as propriedades valorTotal (number) e itens (array de strings).
//Crie um arquivo separado onde você utilizará esse namespace, instanciando a classe Orcamento e utilizando as funções de cálculo de imposto e desconto para modificar o valor total.


import { Cliente } from './cliente';
import { Financeiro } from './financeiro';
import { Pedido } from './pedido';

const marceloCliente = new Cliente('Marcelo', 'mkf@pm.me');
const pedidoMarcelo = new Pedido(marceloCliente, 'PS5', 5000);

console.log(pedidoMarcelo.exibirPedido());

const orcamentoExemplo = new Financeiro.Orcamento(20000, ['Alienware', 'Macintosh']);

console.log(orcamentoExemplo.exibirOrcamento());

const valorComImposto = Financeiro.calcularImposto(5000, 0.15);
console.log(`Valor com Imposto: R$${valorComImposto.toFixed(2)}`);

const valorComDesconto = Financeiro.calcularDesconto(5000, 0.10);
console.log(`Valor com Desconto: R$${valorComDesconto.toFixed(2)}`);
