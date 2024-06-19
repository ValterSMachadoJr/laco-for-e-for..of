let array = [10, 8.5, 8.8, 9.1]; // Declaração e inicialização do array com valores numéricos
let soma = 0; // Declaração e inicialização da variável soma com zero

for (let valor of array) { // Loop que percorre todos os elementos do array usando for...of
    soma = soma +  valor; // Adiciona o valor do elemento atual do array à variável soma
}

let media = soma / array.length; // Calcula a média dividindo a soma pelo número de elementos do array

console.log(`A média é: ${media}`); // Imprime a média dos elementos do array no console

