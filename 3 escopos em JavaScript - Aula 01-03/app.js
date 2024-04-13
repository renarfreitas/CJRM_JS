// O que é escopo?: A visibilidade de uma variável
// function myFunc() {
//   let cat = 'Zeca'
//   const age = 3
//   var color = 'cinza'
// }

// myFunc()
// console.log(color)

// function myFunc() {
//   let cat = 'Zeca'
//   const age = 3
//   var color = 'cinza'
//   console.log(age)
// }

// function myFunc2() {
//   var color = 'branco'
//   const age = 5
//   console.log(age)
// }

// myFunc()
// myFunc2()

// const dog = 'Pastor-alemão'

// function dogWatch () {
//     const dog = 'Samoieda'
//     console.log(dog)
// }

// dogWatch()
// console.log(dog)

// Escopo de Bloco
// No JavaScritp um bloco tem a notação de abertura e fechamado de chaves
// if (true) {
//     let dragon = 'Balerian'
//     console.log(dragon)
// }

// console.log(dragon) // Uncaught ReferencerError

// if (true) {
//     var dragon = 'Balerian' //let e const tem regras diferentes do escopo da var
//     console.log(dragon)
// }

// console.log(dragon)

// Escopo Léxico

const external = () => {
  //   const book = 'Sapiens'

  const internal = () => {
    // const book = 'Os testamentos'

    const extraInternal = () => {
      const book = 'A Arte da Guerra'
      console.log(book.toUpperCase())
    }

    extraInternal()
  }

  internal()
}

//#só para não passar em branco
