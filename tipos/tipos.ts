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