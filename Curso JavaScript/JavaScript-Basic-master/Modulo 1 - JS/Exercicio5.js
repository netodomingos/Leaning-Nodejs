//Exercicio 4 / Modulo 1 - RocketSeat(Resolvido).

var usuario = [{
    nome: "Geraldo",
    habilidades: ["JavaScript","Java","ReactJs","Redux"]
},
{
    nome: "Anderson",
    habilidades: ["Java","C#","JavaScript","HTML/CSS"]
}
];

function exibeHabilidade(usuario){
    for( usuario of usuario){
        console.log("O "+ usuario.nome + " tem as hablidades de "+ usuario.habilidades.join(", ")+".");
    }
}
exibeHabilidade(usuario);