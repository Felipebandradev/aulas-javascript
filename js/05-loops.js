console.log("loops!");

/* 
uso geral:
while = enquanto
for = para

os loops de uso geral PRECISAM de uma variável de controle de repetição.

usados em objetos e arrays
for/of = para/de (arrays)
for/in = para/em (objetos)
*/

// exemplo 1 : loop while

/* let contador = 1;

while( contador <= 5 ){
    alert(`posso perguntar (salvador, Pedro)`);

    //++ incremento
    contador++;
}; */

// Exemplo 2: for (para)

/* for( let i=1; i <= 50; i++ ){
    console.log (`o valor de i é: ${i}`);
};
 */
/* Nomes para váriaveis de de controle:
i,j ou k
*/

// exemplo 3: loop com array

/* let bandas=[ 
    "slayer","Irom Maiden","Rush","Ac/Dc", "Paçoca"
]; */

//com farofa
/* for( let  banda  of bandas ){
    console.log(`Banda:${banda}`);
};
 */
//sem farofa
/* for(let i=0; i < bandas.length; i++){
    console.log(`Banda:${bandas[i]}`);
}; */


//exemplo 4: loop for in com objeto 
let pessoa ={
    nome:"Fulano da silva",
    idade:40,
    cidade:"Cidadela"
};

for(let dados in pessoa){
    // console.log(`${dados}`);
    console.log(pessoa[dados]);
};
