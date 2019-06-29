function retornaSexo(sexo){
    if(sexo === 'M' ){
        return 'Masculino';
    }else if(sexo === 'F' ){
        return 'Feminino';
    }
    else{
        return 'Outro';
    }
}

var resultado = retornaSexo( 'M' )
//console.log(resultado)

switch (sexo){
    case 'M':
        return 'Masculino';
    case 'F':
        return 'Feminino';
    default:
        return 'Outro';
}

 // AND, OR, NOT
    
 var sexo = 'M', idade = 23;
    
 if(sexo === 'M' && idade >= 23 ){ //AND
     return 'OK';
 }else if(sexo === 'M' || idade >= 23 ){ //OR
     return 'OK';
 }else if( sexo !== 'M' || idade >= 23 ){ //NOT
    return 'OK';
 }

 var masculino = sexo === 'M' // Funciona como um IF, pois retorna um True && False

//Condição Ternária
var sexo = 'M';

if(sexo === 'M' ){
    return 'Masculino';
}else{
    return 'Feminino';
}
//
var sexo = 'F';
    return (sexo === 'M' ) ? 'Masculino' : 'Feminino';
//console.log(retorno)

// Funciona como a condição do if e o else

for( var i = 0 ; i <= 100 ; i++ ){
    console.log( i )
}
while( j <= 100 ){ // Usado quando não sabemos quantas vezes ele irá rodar o J
    console.log( j ) 

    j++
}
//Intervalo e Timeout

function exibeAlgo(){
    console.log( 'Hello World' );
}
    setInterval(exibeAlgo(),1000 ); // 1sec (tipo o do fogo do DOOM)    
    setTimeout(exibeAlgo,5000 );// Executa o negocio dps dos sec que vc informou (5000 = 5s)