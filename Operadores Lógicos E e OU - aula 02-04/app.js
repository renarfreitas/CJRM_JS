// Operadores Lógicos - "OU" || ee "E" &&
const password = 'oij12'

if (password.length >= 12 && password.includes('1')) {
  console.log('senha muito forte =)')
} else if (
  password.length >= 8 ||
  (password.includes('1') && password.length >= 5)
) {
  console.log('Senha forte')
} else {
  console.log('a senha deve contar 8 ou mais caracteres')
}
