let dobro = function (a) { // Função comum
    return 2 * a
}

dobro = (a) => { //Reduzindo a sentença com a função arrow
    return 2 * a
}

dobro = a => 2 * a // Reduzindo ainda mais, tirando os parenteses
console.log(dobro(Math.PI));

let ola = function () { //Função normal
    return 'Olá'
}

ola = () => 'Olá'; //Recomendado usar

ola = _ => 'Olá';