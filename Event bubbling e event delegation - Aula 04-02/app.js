const ul = document.querySelector('ul')
const button = document.querySelector('button')
const input = document.querySelector('input')

button.addEventListener('click', event => {
  const li = document.createElement('li')

  li.textContent = 'Novo item'
  ul.append(li) // ultimo filho do elemento
  // ul.prepend(li) // primeiro filho do elemento 
})  


ul.addEventListener('click', event => {
  const clickedElement = event.target

  if(clickedElement.tagName === 'LI') {
    clickedElement.remove()
  }
})