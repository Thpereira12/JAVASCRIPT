let nome = 'Thierry'

for(let i = 0; i < 10; i = i + 1){
    

    if(i == 3 ){
        nome = 'Richard';
    }

    if(i == 5 && nome == 'Richard'){
        console.log('O nome é Richard, pode parar');
        break;
    }

console.log(i)
}
/*
    Função break
● As vezes precisamos parar o loop antes que complete todo o seu ciclo;
● Para isso utilizamos o break;
*/ 
