// Argumentos, parâmetros e default parameters

const myFunc2 = function () {
  console.log('Oi, Fulano!')
}

const myFunc = function (name = 'Estrôncio', lastName = 'Almeida') {
  console.log(`Oi, ${name} ${lastName}!`)
}

myFunc2()

myFunc('Renar', 'Freitas')
