// Objetos literal
let user = {
    name:'Renar',
    age: 39,
    email: 'renarfreitas@gmail.com',
    city: 'Salvador',
    blogPosts:  ['Empadão de frango', '4 receitas de pure de batatas']
}

console.log(user.name)
// sobreescrevendo propriedades

user.age = 32
console.log(user.age)

// acessando propriedade com notação de colchetes

console.log(user['email'])
user['name'] = 'Freitas'
console.log(user['name'])