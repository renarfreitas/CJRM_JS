// Objetos literal
let user = {
  name: 'Renar',
  age: 39,
  email: 'renarfreitas@gmail.com',
  city: 'Salvador',
  blogPosts: ['Feijoada', 'Banofe de Banana']
}

console.log(user)
console.log(user.name)
// sobreescrevendo propriedades

user.age = 32

console.log(user.name)
console.log(user.age)
console.log(user.email)
console.log(user.city)
console.log(user.blogPosts)

// acessando propriedade com notação de colchetes

console.log(user['email'])

const key = 'email'

console.log(user[key])
// Atribuir valores com notação de cochete
// user['name'] = 'Freitas'

console.log(user['name'])

console.log(typeof user)
