const present = new Date() 

/* 
- Datas são um tipo de objeto, ou seja: por serem um objeto eles são um tipo de referência;  
  A importância de se trabalhar com Datas:  
  É na criação de data de um post em um blog ou implementar a data de um evento;  

- DateConstructor: Constrói (cria), um tipo de objeto;   

- Quando uma Date é criada em JavaScritp, ela representa o tempo presente, o agora o momento em que o arquivo foi executado;  

- A palavra chave "new", e inserido antes de um construtor para que o novo objeto do tipo data seja criado;  

- O objeto criado pela invocação do Date(), representa um momento no tempo;  

- A contagem do tempo (mês, semanas e dias), é zero base.  
*/ 

//Obtendo partes da data: 

console.log(typeof present,":", present) 
console.log('getFullYar:', present.getFullYear()) 
console.log('getMonth:', present.getMonth()) 
console.log('getDate:', present.getDate()) 
console.log('getDay:', present.getDay()) 
console.log('getHous:', present.getHours()) 
console.log('getMinutes:', present.getMinutes()) 
console.log('getSeconds:', present.getSeconds()) 

console.log('timestamp:', present.getTime()) // Represento o número em milissegundos de 1 de janeiro de 19770, até o momento presente. 

// Obtendo partes da data em formato de string: 
console.log('toDateString:', present.toDateString()) 
console.log('toTimeString:', present.toTimeString()) 
console.log('toLocaleString:', present.toLocaleString()) // em mês, dia, ano, e as horas em minutos e segundos. 