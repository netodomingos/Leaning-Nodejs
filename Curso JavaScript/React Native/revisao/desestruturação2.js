const [a] = [10];
console.log(a);

const [n1, , n3, , n5, , n6 = 0] = [10, 2, 5, 8]; // n1 = 10, n3 = 5 (pq pula o n2 e o 2) n5 = undefined (não alteramos)
console.log(n1, n3, n5, n6);                      // n6 = 0 porque alteramos

const [, [, nota]] = [[3, 5, 6], [1, 9, 8]]; // pega o 9 porque é o segundo elemento depois da virgula dentro do array
console.log(nota);
