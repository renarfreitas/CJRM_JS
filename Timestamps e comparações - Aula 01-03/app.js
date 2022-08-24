// Uma data em JavaScript é representada por meio de um objeto. Para gerarmos este objeto que representa uma data qualquer no tempo podemos invocar a função construtora new Date() - a palavra-chave new é responsável por fazer com que um objeto seja retornado na invocação da função construtora.

// Um objeto de data é baseado no timestamp: Na quantidade de milissegundos passados de 01/01/1970, às 00:00:00.

// Podemos criar um objeto que represente qualquer momento no tempo, inserindo como argumento da função construtora o tempo que desejamos representar com este nosso objeto. Se nenhum valor for inserido como argumento da função construtora o objeto criado representará o momento atual, o presente, o momento na qual o arquivo foi executado.

const past = new Date('May 1 2020 7:47:00') // Forma representativa de um determinado tempo, para comparação com o tempo atual.
const present  = new Date()

console.log(past, present)
const difference = present.getTime() - past.getTime() // Calculo da diferenceça entre o momento atual e um tempo passada dterminado.
console.log(difference)

const seconds = Math.round(difference / 1000)  // Convertendo o número decimal em um inteiro na forma padrão.

console.log({ seconds })

const minutes = Math.round(seconds / 60)
console.log({ minutes }) 

const hours = Math.round(minutes / 60)
console.log({ hours })

const days = Math.round(hours / 24)
console.log({ days })

const timestamp = 72567845119
console.log(new Date(timestamp)) // obtendo a string do timestamp.
/*
Curiosity about: The ECMAScript epoch and timestamps

A JavaScript date is fundamentally specified as the number of milliseconds that have elapsed since the ECMAScript epoch, which is defined as January 1, 1970, UTC (equivalent to the UNIX epoch). 
*/
