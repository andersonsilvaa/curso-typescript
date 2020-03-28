"use strict";
// string
var nome = 'Anderson';
console.log(nome);
// numbers
var idade = 27;
console.log(idade);
var peso = 88.2;
console.log(peso);
// boolean
var possuiHobbies = false;
console.log(possuiHobbies);
// array
var hobbies = ['Cozinhar', 'Futebol', 'Praticar esportes'];
hobbies.forEach(function (hobbie) { return console.log(hobbie); });
console.log(typeof hobbies);
var tamanhos = [10, 20, 30];
tamanhos.forEach(function (tamanho) { return console.log(tamanho); });
var esportes = ['Futebol', 'Basquete', 'Tênis'];
console.log(esportes[0]);
esportes = [10, 50];
console.log(esportes[0]);
// tuplas
var endereco = ['Quadra 40 Conjunto B Lote', 18, 'Setor 08'];
console.log(endereco.join(' '));
// enums
var cor;
(function (cor) {
    cor[cor["Cinza"] = 0] = "Cinza";
    cor[cor["Verde"] = 1] = "Verde";
    cor[cor["Azul"] = 2] = "Azul";
    cor[cor["Vermelho"] = 3] = "Vermelho";
    cor[cor["Preto"] = 4] = "Preto";
    cor[cor["Branco"] = 5] = "Branco";
})(cor || (cor = {}));
;
console.log(cor.Vermelho);
// any
var carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2016 };
console.log(carro);
// funções
function retornarNome() {
    return nome;
}
console.log(retornarNome());
function digaOi() { console.log('Oi'); }
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
console.log(multiplicar(2, 9.5));
// tipo função
var calculo;
calculo = multiplicar;
console.log(calculo(5, 15));
// objetos 
var usuario = { nome: 'Anderson', idade: 27 };
console.log(usuario);
