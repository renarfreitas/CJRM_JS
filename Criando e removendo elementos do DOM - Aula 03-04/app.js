const ul = document.querySelector('ul')
const lis = document.querySelectorAll('li')
const button = document.querySelector('button')


lis.forEach( li => {
  li.addEventListener('click', event => {
    const clickedElement = event.target

    clickedElement.remove()
  })
})

button.addEventListener('click', event => {
  const li = document.createElement('li')

  li.textContent = 'Novo item'
  ul.append(li) // ultimo filho do elemento
  // ul.prepend(li) // primeiro filho do elemento 
})  
