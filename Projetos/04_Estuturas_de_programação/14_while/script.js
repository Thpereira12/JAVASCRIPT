let x      = 0
let y      = 9
let mult   = 0
let result = 0

while(x <= 10){
    console.log(x);
    x = x + 1;
}

while(result <= 90){
    console.log(y + ' X ' + mult + ' = ' + result)
    mult = mult +   1
    result = y * mult
}

/*
    Função while()
● Fará uma ação, até que a condição seja atingida
● Precisamos realmente ‘definir um fim’ para o loop, para não termos o problema de loop infinito;
*/ 

