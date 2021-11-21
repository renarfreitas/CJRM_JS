/*Encadeamento de métodos 
  1 - Obter deste array os livros com preço acima de R$20;
  2 - Gerar par atodos os livros uma string informando o nome
  e o preço dos livros em promoção.
*/

const books = [
    { name: 'Código Limpo', price: 30 },
    { name: 'O milagre da manhã', price: 5 },
    { name: 'Alice no País das Maravilhas', price: 10 },
    { name: 'Quem Pensa Enriquece', price: 50 },
    { name: 'O livro da ciência', price: 40 }
  ]
// Na utilização do encademanto de métodos, usamos uma convensão para formatar o encadeamento para cada método em uma linha
const booksOnSale = books
    .filter( ({price} ) => price > 20)
    .map( ({name, price}) => `O preoço do livro "${name}" caiu para ${price}`)

console.log(booksOnSale)
