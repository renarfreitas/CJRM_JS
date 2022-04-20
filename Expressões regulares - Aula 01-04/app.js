// regex : ^[a-zA-Z0-9]{6,10}$ caracteres de a - z, maiuscula e minuscula, de 6 a 10 caracteres com letras e números 
// ^.{6,10}$ : o ponto indica que qualquer carectere será aceito inclusive simbolos.

const form = document.querySelector('.signup-form')
const userNameInput = document.querySelector('#username')

form.addEventListener('submit', event => {
  event.preventDefault()

  console.log(event.target.username.value)
})

const username = 'renarf'
const pattern = /^[a-z]{6,}$/
const isAMathc = pattern.test(username)

// if(isAMathc) {
//   console.log('o teste da regex passou =)')
// } else {
//   console.log('o tete da regex não passou =(')
// }

const result = username.search(pattern) // metodo que retorna um número quando um match acontece ou não com a instrig. 0 quando o mathc acontece, e 1 quando o match não acontece.

console.log(result)