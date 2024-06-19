let array = [10, 8.5, 8.8, 9.1];
let soma = 0;
let media; // Declarando a variável media antes de usá-la

for (let i = 0; i < array.length; i++) {
    soma = soma + array[i]; //é uma forma abreviada de escrever soma = soma + array[i];.
}

media = soma / array.length; // Calculando a média fora do loop

console.log(media);
