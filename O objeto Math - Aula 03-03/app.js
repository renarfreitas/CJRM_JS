// O objeto Math
console.log(Math)
console.log(Math.PI)
console.log(Math.E)

const area = 7.7

console.log(Math.round(area)) //Converte um número decimal de forma padrão >.5 para cima <.5 para baixo
console.log(Math.floor(area)) //Converte um número decimal sempre para cima
console.log(Math.ceil(area)) //Converte um número decimal sempre para baixo
console.log(Math.trunc(area)) //Remove o decimal de um número

// numeros aleatórios
const randomNumber = Math.random()

console.log(randomNumber)

console.log(Math.round(randomNumber * 100)) // Gera um número aletorio entre 0 e 100
