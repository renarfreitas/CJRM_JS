// O método sort 
// exemplo 1: Ordenando strings
const names = ['Christian', 'Alfredo', 'Edson']
names.sort()

console.log(names)

// exemplo 2: Ordenando strings
const socores = [10, 50, 20, 5, 35, 70] 

socores.sort((score1, score2) => score1 - score2)

console.log(socores)

// exemplo 3: Ordenando strings
const theBigFamily = [
  { name: 'Lineu', score: 20 },
  { name: 'Nenê', score: 10 },
  { name: 'Tuco', score: 50 },
  { name: 'Bebel', score: 30 },
  { name: 'Agostinho', score: 70 }
]

// theBigFamily.sort((item1, item2) => {
//   if(item1.score > item2.score){
//     return -1
//   } else if (item2.score > item1.score) {
//     return 1
//   }

//   return 0
// })

theBigFamily.sort((item1, item2)=> item2.score - item1.score)
console.log(theBigFamily)
