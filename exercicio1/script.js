const num = +prompt('digite um numero...')
if (num % 2 == 0) {
  if (num % 3 == 0) {
    console.log('O numero é divisivel por 2 e por 3')
  } else {
    console.log('O numero é divisivel por 2 ou por 3')
  }
} else if (num % 3 == 0) {
  console.log('O numero é divisivel por 2 ou por 3')
} else {
  console.log('O numero não é divisivel por 2 ou por 3')
}

if (num % 3 == 0 || num % 2 == 0) {
  console.log('O numero é divisivel por 2 ou por 3')
} else {
  console.log('O numero não é divisivel por 2 ou por 3')
}
