const formAddToDo = document.querySelector('.form-add-todo')
const todoContainer = document.querySelector('.todos-container')

formAddToDo.addEventListener('submit', event => {
    event.preventDefault()

    const inputValue = event.target.add.value.trim()

    if(inputValue){
        todoContainer.innerHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${inputValue}</span>
            <i class="far fa-trash-alt delete"></i>
            </li>
        `
        event.target.reset()
    }
})

todoContainer.addEventListener('click', event => {
    const clickedElement = event.target

    if (Array.from(clickedElement.classList).includes('delete')) { // convertendo o domtokenlist em um array
        clickedElement.parentElement.remove() // removendo o pai do elemento clickado.
    }
})