// Eventos de click
const button = document.querySelector('button')

button.addEventListener('click', event => {
  console.log('Clicou no botão')
})

const lis = document.querySelectorAll('li') // Obter todas as li's da página

lis.forEach(li => {
  li.addEventListener('click', event => {
    const clickedElement = event.target

    clickedElement.style.textDecoration = 'line-through'
  })
})
