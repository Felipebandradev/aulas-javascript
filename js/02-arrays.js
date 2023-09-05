//criando array (vetor)

let alunos=["Melissa", "Diana", "Leandro","Eliel","Patrícia"];

//Exibindo a estrutura de dados do array

console.log(alunos);

//a melhor aluna da sala é a Melissa
console.log(`A melhor aluna da sala é a ${alunos[0]}`);
// e o pior é o Eliel
console.log(`E o pior é o ${alunos[3]}`);


let tecnologias=["php","C#","Python","C++"];

console.log(tecnologias);

console.log(`${tecnologias[1]} é uma linguagem de programação usadas para jogos feitos na unity, e ${tecnologias[3]} é a parte de back-end da programação de jogos e muito usada na unreal.`)

//array como matriz de 2 dimenssões

let linguagens = [ 
    //0        1     2
    ["Html", "CSS", "JS"],//0
    ["JAVA","C++","C#"] //1
];

console.log(linguagens[0][1])
console.log(linguagens[1][0])
console.log(linguagens[0][0])
