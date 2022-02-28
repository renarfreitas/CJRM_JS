// inteiros e decimais
const radius = 10
const pi = 3.14

// operadores aritméticos
const area = pi * radius ** 2

// ordem de operações 1º parênteses; 2º expoentes ou raízes; 3º multiplicação e divisão; 4º adição e subtração.
console.log(area)

const crazyOperation = 5 * (10 - 3) ** 2

console.log(crazyOperation)

// operadores de incremento e decremento
let postLikes = 10

postLikes = postLikes + 1 // incremento

postLikes-- // decremento

console.log(postLikes)
// operadores de addition, subrtaction, multiplication e division assignment

postLikes = postLikes + 10

postLikes += 10 //additional assigment
console.log(postLikes)

// NaN - not a number
console.log(7 / 'oi')

// conctenação de string com número
const linkesMessage = 'O post tem ' + postLikes + ' likes.'

console.log(linkesMessage)