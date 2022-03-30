// A palavra-chave this

let user = {
    name: 'João',
    age:31,
    email:'joaocardoso@gmail.com',
    city:'São Paulo', 
    blogPosts: ['Empadão de frango', '4 receitas de purê de batata'],
    login: function () {
        console.log('Usuário logado')
    },
    logout: function () {
        console.log('Usuário deslogado') // function declaration 
    },
    logBlogPosots () { // shortcut para function declaration.
        console.log(`${this.name} escreveu os seguintes posts:`)
        this.blogPosts.forEach( post => {
            console.log(post)
        }) // Objeto de contexto // não usar o arrow fuction ficar atento ao contexto
    }
}
user.login()
user.logout()
user.logBlogPosots()