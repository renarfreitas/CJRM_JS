/*date-fns: é uma biblioteca (lib.), para trabalhar com datas em JavaScript, tanto no browser quanto no Node-js */
const present = new Date()


console.log(dateFns) /*Exibe um objeto com todos os métodos e propriedades disponíveis na lib  */
console.log(dateFns.isToday(present)) /* Checando uma data */

/*
Formatação de data com o datefns
*/

console.log(dateFns.format(present, 'MMMM')) // Mês 
console.log(dateFns.format(present, 'YY')) // Ano com somente dois digitos
console.log(dateFns.format(present, 'dddd')) // Dia da semana
console.log(dateFns.format(present, 'Do')) // Dia do mês em formato ordinal
console.log(dateFns.format(present, 'DD/MM/YYYY')) // Combinação de tokens 

const past = new Date('June 8 2020 7:47:07') // Representação de um momento passado 

// Comparando da distância entre duas datas.
console.log(dateFns.distanceInWords(
  present,
  past,
  { addSuffix: true }
))// Retornar uma string com a distância entre as datas que a função recebe como argumento. 