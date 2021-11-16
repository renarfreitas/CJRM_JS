/*
O método filter:
De formar similiar ao map, o filter também recebe uma função como argumento e executa essa funão para cada item do array.

Quando utilizar o filter?
Baseado em uma condição, se você precisar obter um novo array com somente alguns itens do array original.

Semelhante ao metódo map, ele também aceita três parametros na função de argumento do filter: item, index, e o array, dos três o item é o unico obrigatório.
*/

const randomNumbers = [36, 99, 37, 63]

const numbersGreaterThan37 = randomNumbers.filter(item => item > 37) // a função vai ser executada par acada item do array, e retorna true quando atender a condição, e adicionar o item atual ao novo array.

console.log(numbersGreaterThan37)

// segundo exemplo

const users = [
    { name: 'Ada Lovelace', premium: true },
    { name: 'Grace Hopper', premium: false },
    { name: 'Alan Turing', premium: true },
    { name: 'Linus Torvalds', premium: false },
    { name: 'Margaret Hamilton', premium: true }
  ]

const premiumUsers = users.filter(user => user.premium)

console.log({premiumUsers, users})