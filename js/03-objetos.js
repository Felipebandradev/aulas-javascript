//Exemplo 1:objeto com dados de pessoa

let pessoa={
    nome:"John Moura",
    idade: 666,
    cidade:"São Paulo",
    estado:"SP"
};

//Exibindo a Estrutura do objeto
console.log(pessoa);

//o jhon moura esta na cidade de sp

console.log(
    `O ${pessoa.nome} está na ciadae de ${pessoa.estado}`
);

//exemplo 2: objeto com array

let livro = {
    titulo: "Steven Universo",
    autor: "Rebecca Sugar",
    volumes: [
        "A guerra Gem",
        " O nascimento de Steven",
        " Volta das Diamantes",
        " A nova Era"
    ]
};

console.log( livro);

// Stevem universo

console.log( livro.titulo);

// O nascimento de steven

console.log( livro.volumes[1]);

console.log(`${livro.titulo} é um livro que fala sobre ${livro.volumes[0]} que acabou antes do ${livro.volumes[1]} que trouxe ${livro.volumes[2]} mas assim começou ${livro.volumes[3]} de paz. Escrito por ${livro.autor}.`);

//exemplo 3: Array com objetos

let livros = [

    {
        titulo: "Harry Potter",
        autor: " J. K. Rowlling"
    },
    {
        titulo:"Intrumentos Mortais",
        autor: "Cassandra Clare"
    },
    {
        titulo:"O Iluminado",
        autor:"Stephen King"
    }

];
console.log(livros);
//Stephen King
console.log(livros[2].autor);


let aluno = {
    nome:"Wanda Silva",
    nascimento:"10/10/1940",
    telefones:["11-999-999","11-666-666"],
    endereco: { rua:"Westevil",numero:"1087", bairro:"Visonário"}
};

console.log(aluno);

console.log(
`Nome: ${aluno.nome},
Taelefone celular: ${aluno.telefones[0]}, 
Telefone fixo: ${aluno.telefones[1]}
Bairro: ${aluno.endereco.bairro}.`
);


