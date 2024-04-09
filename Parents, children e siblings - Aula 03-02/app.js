const article = document.querySelector('article')
console.log(article.children)

Array.from(article.children).forEach(element => {
  element.classList.add('article-element')
})

const title = document.querySelector('h2')

// console.log(title.parentElement.parentElement)

// console.log(title.nextElementSibling)

console.log(title.previousElementSibling)
