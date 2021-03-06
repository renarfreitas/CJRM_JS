const formAddToDo = document.querySelector('.form-add-todo')
const inputSearchTodo = document.querySelector('.form-search input')
const todoContainer = document.querySelector('.todos-container')
// - Inserção
formAddToDo.addEventListener('submit', event => {
    event.preventDefault()

    const inputValue = event.target.add.value.trim()

    if(inputValue){
        todoContainer.innerHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-center" data-li="list">
            <span>${inputValue}</span>
            <i class="far fa-trash-alt delete"></i>
            </li>
        `
        event.target.reset()
    }
})
// - Remoção
todoContainer.addEventListener('click', event => {
    const clickedElement = event.target
    if (Array.from(clickedElement.classList).includes('delete')) { // convertendo o domtokenlist em um array
        clickedElement.parentElement.remove() // removendo o pai do elemento clickado.
    }

})
// - Busca
inputSearchTodo.addEventListener('input', event => {
    const inputValue = event.target.value.trim().toLowerCase()
    Array.from(todoContainer.children)
        .filter( todo => !todo.textContent.toLowerCase().includes(inputValue))
        .forEach( todo => {
            todo.classList.remove('d-flex')
            todo.classList.add('hidden')
        })
    Array.from(todoContainer.children)
        .filter( todo => todo.textContent.toLowerCase().includes(inputValue))
        .forEach( todo => {
            todo.classList.remove('hidden')
            todo.classList.add('d-flex')
        })
})