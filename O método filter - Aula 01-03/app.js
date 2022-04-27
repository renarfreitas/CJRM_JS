// O método filter
const randomNumber = [35, 99, 37, 63]

// array.filter((item, index, array) => {condição baseado no parametro})

const numbersGreaterThan37 = randomNumber.filter( item => item > 37)

console.log(numbersGreaterThan37)

const users = [
  { name: 'Ada Lovelace', premium: true },
  { name: 'Grace Hopper', premium: false },
  { name: 'Alan Turing', premium: true },
  { name: 'Linus Torvalds', premium: false },
  { name: 'Margaret Hamilton', premium: true }
]

const premiumUser = users.filter(user => user.premium)

console.log(premiumUser)