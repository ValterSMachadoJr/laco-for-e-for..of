let array = [10, 8.5, 8.8, 9.1]; // Declaração e inicialização do array com valores numéricos
let soma = 0; // Declaração e inicialização da variável soma com zero
let i = 0; // Declaração e inicialização do índice

do {
    soma += array[i]; // Adiciona o valor do elemento atual do array à variável soma
    i++; // Incrementa o índice
} while (i < array.length); // Loop que percorre todos os elementos do array

let media = soma / array.length; // Calcula a média dividindo a soma pelo número de elementos do array

console.log(media); // Imprime a média dos elementos do array no console
