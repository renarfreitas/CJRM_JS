/*
O JS é por natureza uma lingagem Sincrona
Ou seja executa linha por linha de cima para baixo...
Uma linguagem Singol Thread! (Sequêncial de cima para baixo uma depois da outra)

O que é uma operação assíncrona?
É um código que inicia um processo 
agora e finaliza esse processo posteriormente.
*/

console.log(1)
console.log(2)

setTimeout(() => {
  console.log('Função de callback executada!') // Este pedaço de código é uma operação assincrona.
}, 4000)

console.log(3)
console.log(4)