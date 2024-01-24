// Conversão de tipos
let score = '100'

// score = Numbesr(score)

// console.log(score + 1)
// console.log(typeof score)

const crazyConversion = Number('Maçã')
const converterdNumber = String(97)
const booleanConversion = Boolean(10)

console.log(Boolean(0, false, '', '', ``, null, undefined, NaN))

/*
    Valores falsy:
    - false
    - 0
    - "", '', ``
    - null
    - undefined
    - NaN

    Valores Truthy:
    - Qualquer valor que não seja falsy
*/
console.log(crazyConversion, typeof booleanConversion)
// converções explicitas de dados.
