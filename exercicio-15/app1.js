const ul = document.querySelector('ul')
const lis = document.querySelectorAll('li')
const button = document.querySelector('button')



button.addEventListener('click', () => {
    const li = document.createElement('li')
    li.textContent = 'Novo item'

    ul.prepend(li)
})


ul.addEventListener('click', event => {
    const clickedElement = event.target

    if(clickedElement.tagName === 'LI'){
        clickedElement.remove()
    }
})
