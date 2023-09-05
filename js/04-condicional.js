console.log("condicionais!");

/* 
if(se)/else( se não)
*/

let nome= "Klaibert";

let idade= 79;


/* 
verificar idade para saber se esta passoa é maior ou menor de idade.
*/
/*  o if/ usará esta variavel para guardar o resultado da condicional. por isso, a inicializamas sem valor(indefinido) */
let mensagem;
if(idade >=18 ){
    mensagem ="maior";
} else {
    mensagem ="menor";
}

//Apresentando os resultados

console.log(`${nome}, É ${mensagem} de idade!.`);

/* O operadores relacionados
>= Maior ou igual
<= Menor ou igual
>  Maior
<  Menor
== Igualdade  (Verificar se Valores iguais)
!= Diferenças (Verificar se os Valores Diferentes) */



let nota1 = 10;
let nota2 = 10;

let media = (nota1+nota2)/2;

let resultado;
if (media >=7) {
   resultado = "Aprovado";
} else {
    resultado = "Reprovado";
};

console.log(`${nome}, você foi ${resultado} e sua media final foi ${media}.`);


