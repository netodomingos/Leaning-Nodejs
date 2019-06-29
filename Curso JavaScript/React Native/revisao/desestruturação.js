const pessoa = {
    nome: 'Geraldo',
    idade: 19,
    endereço:{
        rua: 'Jupiatá',
        numero: 55
    }
}

const { nome, idade } = pessoa; // tirando elemenos de dentro da estrutura
// console.log(nome, idade);

const { nome: n, idade: i } = pessoa; // Altera o nome = n && idade = i (novos nomes de variavél)
console.log(n, i);

const { sobrenome = true } = pessoa; // Sobrenome não existe na estrutura, mas ao invés de retornar 'UNDEFINED', 
console.log(sobrenome);              // alteramos o que ele irá retornar para true

const { endereço: { rua, numero, casa } } = pessoa //Busca dentro de endereço que esta dentro de pessoa
console.log(rua, numero, casa); // Casa retorna Undefined porque, não auteramos o que ele irá retornar.

