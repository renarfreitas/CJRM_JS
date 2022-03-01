// Arrays
let heroes = ['Batman', 'Catwoman', 'Iron Man']

heroes[2] = 'Spider-Man'

const ages = [31, 25, 39, 40, 25]

const randomArray = ['Parker', 'Diana', 19, 18]


// Métodos de arrays
console.log(heroes.length)

const joinHeroes = heroes.join('-')
const indexOf25 = ages.indexOf('25')
const moreHeroes = heroes.concat(['Superman', 'Wolverine'])
const pushToHeroes = heroes.push('Cyclops', 'Hulk') // Mutação de valores
const popHeroes = heroes.pop()

console.log(moreHeroes, heroes, popHeroes)


