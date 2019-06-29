//Exercicio 1 / Modulo 1 - Rocketseat (Resolvido).

function exibeMensagem(endereço){
    return ("O usuário mora em " +
endereço.cidade +
" / " +
endereço.uf +
", no bairro " +
endereço.bairro +
', na rua "' +
endereço.rua +
'" com nº ' +
endereço.numero +
"."
);
}
var endereço = {
cidade: 'Recife',
uf: 'PE',
bairro: 'Areias',
numero: 55,
rua: 'Jupiatá'

};

console.log(exibeMensagem(endereço));