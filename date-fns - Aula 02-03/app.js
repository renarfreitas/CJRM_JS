/*
date-Fns: É uma lib ou biblioteca para trabalhar com datas em JavaScript,
para trabalhos com aplicações de médio e grande porte. 
Pode ser utilizada tanto no broser quando no NODEJS.
url: https://data-fns.org
*/

console.log(dateFns)
const present = new Date('june 7 2020 15:47:07')
const yesIsToday = new Date()

const result = dateFns.isAfter(present, new Date())

console.log(result)
console.log(dateFns.format(present, 'MMMM'))
console.log(dateFns.isToday(yesIsToday)) // função que verifica se a data passada corresponde a data atual
console.log(dateFns.format(present, 'DD/MMM', ))
console.log(dateFns.format(present, 'YY', ))
console.log(dateFns.format(present, 'dddd', ))
console.log(dateFns.format(present, 'Do', ))
console.log(dateFns.format(present, 'DD/MM/YYYY', ))

const past = new Date('June 7 2020 15:00:00')

console.log(dateFns.distanceInWords(present, past, {addSuffix: true }))