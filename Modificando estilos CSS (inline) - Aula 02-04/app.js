const title = document.querySelector('h1')

// title.setAttribute('style', 'margin: 50px;')

console.log(title.style)
console.log(title.style.color)

title.style.margin = '50px'
title.style.color = 'pink'
title.style.fontSize = '50px'
// title.style.margin = ''

if (title.textContent.includes('(inline)')) {
  title.textContent = title.textContent.replace('(inline)', '(in JavaScript)')
}
