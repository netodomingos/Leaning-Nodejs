function rand({min = 0 , max = 1000}) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

const obj = { min: 40, max: 50 };

console.log(rand(obj)); // Gera números entre 40 e 50
console.log(rand({ min: 955 })) // min = 955, max = 1000(valor padrão da função).
console.log(rand({})); // Passa obj vazio e pega o min(padrão) e o max (padrão).
console.log(rand()); // ERRO! Ele pega um UNDEFINED, pois não há objetos padrões e não há como colocar um.
