// Tipos de refêrencia vs Tipos primitivos


/* stack  =>  heap */

// let scoreOne = 50
// let scoreTwo = scoreOne

// console.log(`socreONe: ${scoreOne} | socreTwo: ${scoreTwo}`)

// scoreOne = 100

// console.log(`socreONe: ${scoreOne} | socreTwo: ${scoreTwo}`)

let userOne ={name:'Renar', age: 31}
let userTwo = userOne

console.log(userOne, userTwo)

userOne.age = 32

console.log(userOne, userTwo)