// for loop
// for (let i = 0; i < 5; i++) {
//     console.log(`Dentro do loop: ${i}`)
// }
// console.log('Loop concluído')

const names = ['Linus', 'Ada', 'Bill']

for (let i = 0; i < names.length; i++) {
    const HTMLTemplate = `<p>${names[i]}</p>`
    console.log(HTMLTemplate)
}