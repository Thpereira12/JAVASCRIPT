let x = 0

while(x < 11) {
    x = x + 1;
    if(x % 2){
        continue;
    }
    console.log(x);
    x = x + 1;
}
/*
    Função continue
● Dependendo da nossa lógica, podemos pular o resto da execução do loop;
● Para isso utilizamos a palavra continue;
*/ 

