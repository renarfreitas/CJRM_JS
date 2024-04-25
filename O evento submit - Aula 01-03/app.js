const form = document.querySelector('.signup-form')
const userNameInput = document.querySelector('#username')

form.addEventListener('submit', event => {
  event.preventDefault()
  usuario = event.target.username.value
  alert(`Seu username é: ${usuario}`)
  console.log(event.target.username.value)
})
