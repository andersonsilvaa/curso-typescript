// let & const
let seraQuePode = '?'
console.log(seraQuePode)

let estaFrio = true
if(estaFrio) {
    let acao = 'Colocar o casaco!'
    console.log(acao)
}

const cpf: string = '123.456.000-99'
// cpf = '789.101.132-78'
console.log(cpf)

var segredo = 'externo!'
function revelar() {
    const segredo = 'interno'
    console.log(segredo)
}
revelar()
console.log(segredo)

{
    {
        const def = 'def'
        console.log(def)
    }
}

for(let i = 0; i < 10; i++) {
    console.log(i)
}
// console.log(i)

// Arrow Function
function somar(n1: number, n2: number): number {
    return n1 + n2
}
console.log(somar(2, 2))

const subtrair = (n1: number, n2: number): number => n1 - n2
console.log(subtrair(2, 3))

const saudacao = () => console.log("Olá!")
saudacao()

const falarCom = (pessoa: string) => console.log('Ola ' + pessoa)
falarCom('João')

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
function contagemRegressiva(inicio: number = 5,
    fim: number = inicio - 5): void {
    console.log(inicio)
    while(inicio > fim) {
        inicio--
        console.log(inicio)
    }
    console.log("Fim!")
}

contagemRegressiva()
contagemRegressiva(3)

// Rest & Spread
const numbers = [1, 10, 99, -5, 200, 1034]
console.log(Math.max(...numbers))

const turmaA: string[] = ['João', 'Maria', 'Fernanda']
const turmaB: string[] = 
    ['Fernando', ...turmaA, 'Miguel', 'Lorena']
console.log(turmaB)

function retornarArray(...args: number[]): number[] {
    return args
}

const numeros = retornarArray(1, 2, 4, 5, 6, 345, 623)
console.log(numeros)
console.log(retornarArray(...numbers))

// Rest & Spread (Tupla)
const tupla: [number, string, boolean] = [1, 'abc', false]

function tuplaParam1(a: number, b: string, c: boolean): void {
    console.log(`1) ${a} ${b} ${c}`)
}

tuplaParam1(...tupla)

function tuplaParam2(...params: [number, string, boolean]) {
    // console.log(Array.isArray(params))
    console.log(`2) ${params[0]} ${params[1]} ${params[2]}`)
}

tuplaParam2(...tupla)