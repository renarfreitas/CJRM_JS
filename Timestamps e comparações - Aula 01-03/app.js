const past = new Date('May 1 2020 7:47:00')
const present  = new Date()

console.log(past, present)
const difference = present.getTime() - past.getTime()
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
console.log(new Date(timestamp))