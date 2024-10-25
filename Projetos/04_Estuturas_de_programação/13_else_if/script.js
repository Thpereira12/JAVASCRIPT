let a    = 5
let b    = 3
let nome = 'Thierry'

if(a + b == 3 ){
    console.log('Resultado  é 3');
} else if(a ==4){
    console.log('Valor de A é 4');
} else if(b ==3){
    console.log('Valor de B é 3');
} else{
    console.log('Nenhuma das condições acima!')
}

if(nome != undefined &&  nome == 'Richard'){
    console.log('Nome está definido');
} else if(nome == "Thierry" && nome.length > 5 ){
    console.log('Nome é Thierry');
} else {
    console.log('Nome não é Thierry');
}   

if(1 > 2) {
    console.log("Teste");
}   else if (1==1){
    console.log("Testando");
}


/*
    Função else if()
● Ainda podemos encadear mais condições com o else if;
● Ou seja, antes de executar um else, ou até mesmo sem ele, podemos verificar mais uma condição;
*/ 

