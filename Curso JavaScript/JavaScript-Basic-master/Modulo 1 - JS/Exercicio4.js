//Exercicio 4 / Modulo 1 - RocketSeat(Resolvido).


function experiencia(ano){
    if( ano <= 1 ){
        return 'Iniciante';
    }else if( ano > 1 && ano <= 3 ){ 
        return 'Intermédiario';
    }else if( ano > 3 && ano <= 6 ){
        return 'Avançado';
    }else{
        return 'Mestre Jedi';
    }
}
var anosEstudo = 7;
 console.log(experiencia(anosEstudo));