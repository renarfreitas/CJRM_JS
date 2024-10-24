const present = new Date('june 7 2020 15:47:07')

// console.log(dateFns.isToday(present))
console.log(dateFns.format(present, 'DD/MMM', ))
console.log(dateFns.format(present, 'YY', ))
console.log(dateFns.format(present, 'dddd', ))
console.log(dateFns.format(present, 'Do', ))
console.log(dateFns.format(present, 'DD/MM/YYYY', ))

const past = new Date('June 7 2020 15:00:00')

console.log(dateFns.distanceInWords(present, past, {addSuffix: true }))