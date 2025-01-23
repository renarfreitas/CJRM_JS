const present = new Date()

console.log(present)

console.log(present.getFullYear())
console.log(present.getMonth())
console.log(present.getDate())
console.log(present.getDay())
console.log(present.getHours())
console.log(present.getMinutes())
console.log(present.getSeconds())

console.log('timestamp', present.getTime())

console.log('toDateString:',present.toDateString())
console.log('toTimeString:',present.toTimeString())
console.log('toLocalString:',present.toLocaleString())