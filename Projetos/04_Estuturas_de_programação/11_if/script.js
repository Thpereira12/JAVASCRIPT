let idade      = 21;
let nome       = 'Thierry';
let passaporte = true;

if(idade == 21){
    console.log('Idade igual a 21');
}

if(idade>25){
    console.log("Idade maior que 25");
}

if(nome == 'Thierry' && idade > 10){
    console.log('Nome Thierry e idade maior que 10');
}

if((nome == 'Thierry' && idade > 30) || passaporte == true){
    console.log('Liberado!');
}

/*
    Função if()
● O programa vai executar um bloco de código, SE algo acontecer;
● Onde algo é a condição imposta por um statement;
● Que resultar em um boolean (true or false);
*/ 

