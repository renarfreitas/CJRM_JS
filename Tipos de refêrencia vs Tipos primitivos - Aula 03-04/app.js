// Valores Primitivos

// Tipos de refêrencia vs Tipos primitivos

/* stack  =>  heap 
Stack = tradução livre, Pilha;
Heap = Tradução livre, amontoado.
*/

let scoreOne = 50
let scoreTwo = scoreOne

console.log(`socreONe: ${scoreOne} | socreTwo: ${scoreTwo}`)

scoreOne = 100

console.log(`socreONe: ${scoreOne} | socreTwo: ${scoreTwo}`)

// Valores de referência
let userOne = { name: 'Renar', age: 41, lastname: 'userOne' }
let userTwo = userOne

console.log(userOne, userTwo)

userOne.age = 42
userOne.name = 'Roger'

console.log(userOne, userTwo)

userOne = { name: 'Roger', score: 100 }

console.log(userOne, userTwo)

userOne.score = 200
