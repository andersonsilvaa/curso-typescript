"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
// let & const
var seraQuePode = '?';
console.log(seraQuePode);
var estaFrio = true;
if (estaFrio) {
    var acao = 'Colocar o casaco!';
    console.log(acao);
}
var cpf = '123.456.000-99';
// cpf = '789.101.132-78'
console.log(cpf);
var segredo = 'externo!';
function revelar() {
    var segredo = 'interno';
    console.log(segredo);
}
revelar();
console.log(segredo);
{
    {
        var def = 'def';
        console.log(def);
    }
}
for (var i = 0; i < 10; i++) {
    console.log(i);
}
// console.log(i)
// Arrow Function
function somar(n1, n2) {
    return n1 + n2;
}
console.log(somar(2, 2));
var subtrair = function (n1, n2) { return n1 - n2; };
console.log(subtrair(2, 3));
var saudacao = function () { return console.log("Olá!"); };
saudacao();
var falarCom = function (pessoa) { return console.log('Ola ' + pessoa); };
falarCom('João');
// this
// function normalComThis() {
//     console.log(this)
// }
// normalComThis()
// const normalComThisEspecial = normalComThis
//     .bind({ nome: 'Ana' })
// normalComThisEspecial()
// // this???
// console.log(this)
// const arrowComThis = () => console.log(this)
// arrowComThis()
// const arrowComThisEspecial = arrowComThis
//     .bind({ nome: 'Ana' })
// arrowComThisEspecial()
// Parâmetros padrão
function contagemRegressiva(inicio, fim) {
    if (inicio === void 0) { inicio = 5; }
    if (fim === void 0) { fim = inicio - 5; }
    console.log(inicio);
    while (inicio > fim) {
        inicio--;
        console.log(inicio);
    }
    console.log("Fim!");
}
contagemRegressiva();
contagemRegressiva(3);
// Rest & Spread
var numbers = [1, 10, 99, -5, 200, 1034];
console.log(Math.max.apply(Math, numbers));
var turmaA = ['João', 'Maria', 'Fernanda'];
var turmaB = __spreadArrays(['Fernando'], turmaA, ['Miguel', 'Lorena']);
console.log(turmaB);
function retornarArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
var numeros = retornarArray(1, 2, 4, 5, 6, 345, 623);
console.log(numeros);
console.log(retornarArray.apply(void 0, numbers));
// Rest & Spread (Tupla)
var tupla = [1, 'abc', false];
function tuplaParam1(a, b, c) {
    console.log("1) " + a + " " + b + " " + c);
}
tuplaParam1.apply(void 0, tupla);
function tuplaParam2() {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
    }
    // console.log(Array.isArray(params))
    console.log("2) " + params[0] + " " + params[1] + " " + params[2]);
}
tuplaParam2.apply(void 0, tupla);
//# sourceMappingURL=ecmascript.js.map