// for loop
for (let i = 0; i < 5; i++) {
  console.log(`Dentro do loop: ${i}`)
}
console.log('Loop concluído')

const names = ['Linus', 'Ada', 'Bill']
const hh1 = document.querySelector('h1')

for (let i = 0; i < names.length; i++) {
  const HTMLTemplate = `<p>${names[i]}</p>`
  console.log(HTMLTemplate)
}

let t
for (t = 0; t < 5; t++) {
  console.log(`voccê é um cabeção!${t}`)
}
