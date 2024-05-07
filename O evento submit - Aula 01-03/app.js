// Eventos de submit
const form = document.querySelector('.signup-form') // Obtendo e armazenando a referência do form
const userNameInput = document.querySelector('#username')

form.addEventListener('submit', event => {
  event.preventDefault()
  usuario = event.target.username.value
  alert(`Seu username é: ${usuario}`)
  console.log(event.target.username.value)
}) // Listener de evento, que fica observardo quando o form é enviado.
