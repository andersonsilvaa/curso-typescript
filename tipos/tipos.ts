// string
const nome: string = 'Anderson';
console.log(nome);

// numbers
const idade: number = 27;
console.log(idade);

const peso: number = 88.2;
console.log(peso);

// boolean
const possuiHobbies: boolean = false;
console.log(possuiHobbies);

// array
const hobbies: string[] = ['Cozinhar', 'Futebol', 'Praticar esportes'];
hobbies.forEach(hobbie => console.log(hobbie));
console.log(typeof hobbies);

const tamanhos: number[] = [10, 20, 30];
tamanhos.forEach(tamanho => console.log(tamanho));

let esportes: any[] = ['Futebol', 'Basquete', 'Tênis'];
console.log(esportes[0]);
esportes = [10, 50];
console.log(esportes[0]);

// tuplas
const endereco: [string, number, string] = ['Quadra 40 Conjunto B Lote', 18, 'Setor 08'];
console.log(endereco.join(' '));

// enums
enum cor { Cinza, Verde, Azul, Vermelho, Preto, Branco };
console.log(cor.Vermelho);

// any
let carro: any = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2016 };
console.log(carro);

// funções

function retornarNome(): string {
    return nome;
}
console.log(retornarNome());

function digaOi(): void { console.log('Oi') }
digaOi();

function multiplicar(numA: number, numB: number): number {
    return numA * numB;
}
console.log(multiplicar(2, 9.5));

// tipo função
let calculo: (x: number, y: number) => number;
calculo = multiplicar
console.log(calculo(5, 15));

// objetos 
const usuario = { nome: 'Anderson', idade: 27 };
console.log(usuario);

/**
 ** Desafio 
    Criar um objeto funcionário com:
        - Array de strings com os nomes dos supervisores
        - Função de bater ponto que recebe a hora (número) 
            e retorna uma string
            -> Ponto normal (<= 8)
            -> Fora do horário (> 8)
*/

// Alias
type Funcionario = {
    supervisores: string[],
    baterPonto: (horas: number) => string
}

function baterPonto(horario: number): string {
    let retorno: string = '';

    if (horario <= 8) {
        retorno = 'Ponto normal'
    } else {
        retorno = 'Fora do horário!'
    }

    return retorno;
}

const primeiroFuncionario: Funcionario = {
    supervisores: ['Ana', 'Fernando'],
    baterPonto
}

const segundoFuncionario: Funcionario = {
    supervisores: ['Bia', 'Carlos'],
    baterPonto
}

console.log(primeiroFuncionario.supervisores);
console.log(primeiroFuncionario.baterPonto(8));
console.log(primeiroFuncionario.baterPonto(9));

// Union Types
let nota: number | string = 10
console.log(`Minha nota é ${nota}!`);
nota = '10'
console.log(`Minha nota é ${nota}!`);

// Checando tipos
let valor = 30
console.log(typeof valor);

// never
function falha(msg: string): never {
    throw new Error(msg)
}

const produto = {
    nome: 'Sabão',
    preco: 5,

    validarProduto() {

        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome');
        }

        if (this.preco <= 0) falha('Preco inválido!');
    }
}

produto.validarProduto();

// Desafio

type ContaBancaria = {

    saldo: number,
    depositar: (valor: number) => void
}

const contaBancaria: ContaBancaria = {

    saldo: 3456,

    depositar(valor: number) {
        this.saldo += valor;
    }
}

type Correntista = {

    nome: string,
    contaBancaria: ContaBancaria,
    contatos: string[]
}

const correntista: Correntista = {

    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
}

correntista.contaBancaria.depositar(3000);
console.log(correntista)