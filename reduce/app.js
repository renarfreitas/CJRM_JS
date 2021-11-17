/*
O método reduce:
De forma similar ao map e ao filter, o reduce também recebe uma função por argumento e executa essa função para cada item do array, só que ele é um pouco diferente de ambos, pois, você vai usar o reduce quando baseado no array original, você precisar reduzir o array a algum outro tipo de dado, e esse tipo de dado pode ser um objeto literal, uma string, um número ou ate mesmo um novo array, ao contrario dos dois metodos anteriores, o reduce tem versatilidade para gera um output diferente de um array.
*/

//Primeiro exemplo:

const numbers = [1, 2, 3]

const sumResult = numbers.reduce((accumulator, item) => accumulator + item, 0)

console.log(sumResult)

// Segundo exemplo:

const phaseScores = [
    { name: 'Vinicius Costa', score: 337 },
    { name: 'Roger Melo', score: 43 },
    { name: 'Alfredo Braga', score: 234 },
    { name: 'Pedro H. Silva', score: 261 },
    { name: 'Ana Paula Rocha', score: 491 },
    { name: 'Vinicius Costa', score: 167 },
    { name: 'Roger Melo', score: 137 },
    { name: 'Alfredo Braga', score: 135 },
    { name: 'Ana Paula Rocha', score: 359 },
    { name: 'Pedro H. Silva', score: 133 }
  ]

const rogerScore = phaseScores.reduce((accumulator, phaseScore) => {
    if(phaseScore.name === 'Roger Melo'){
        accumulator += phaseScore.score
    }

    return accumulator
}, 0)

console.log(rogerScore)