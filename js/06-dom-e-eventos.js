console.log("Dom e Eventos");

/* Mani pulação de DOM (Sem eventos) */

//querySelectorAll é uma função para selecionar varios elementos no dom

//Exemplo 0:
//queryselector é uma função para selecionar um elemento no DOM (página/documento).

//Selecionando um h1
const titulo = document.querySelector("h1");


//selecionando todos h2


console.log(titulo);


//modificando o dom

//titulo.textContent = "Opa!";

// varios[0].textContent ="Teste";
const varios = document.querySelectorAll("h2");
console.log(varios);
  for(let elemento of varios){
   // elemento.textContent = "horrores";

    //aplicando css via js
    elemento.style.color = "red";
   // elemento.style.textAlign = "center";
};

//Exemplo 2: Modo Noturno
const pagina = document.querySelector("body");
const botaonoturno = document.querySelector("#noturno");


//monitor de evento
botaonoturno.addEventListener("click", function(){
   pagina.classList.toggle("noturno");

   /* Lódica para mujdar o texto do botão se a pagina estiver com a classe noturno mostramos o botão com o texto "desativar" senão  mostramos o botão com texto "ativar" */
    if(pagina.classList.contains("noturno")){
        botaonoturno.textContent = "Desativar";
    }else{
        botaonoturno.textContent = "Ativar";
    };

});

/* exemplo 3: capturar dados  */

const formulario = document.querySelector("form");
const camponome = document.querySelector("#nome");
const camponota1 = document.querySelector("#nota1");
const camponota2  = document.querySelector("#nota2");
const divresultados  = document.querySelector("#resultados");


formulario.addEventListener("submit", function(event){
    //anulando o comportamento padrão(redirecionamento) do navegador
    event.preventDefault();

    let nome=camponome.value;
    let nota1=parseFloat(camponota1.value);
    let nota2=parseFloat(camponota2.value);

    /* Funções de Converssão
    parseInt() -> garante que valor seja tratado como número inteiro(não permite casas decimais). 
    
    Parse Float() -> garante que o valor seja tratado como número podendo ter casas decimais.
    */

    //calculando
    let media = (nota1 + nota2)/2;
    //verificação da situação do Aluno

    let situacao;

    if (media >= 7) {
       situacao = "aprovado";
    } else {
        situacao = "reprovado";
    };

    /* Etapa 1: Criar um novo  elemento/tag para receber os dados */

    let paragrafo = document.createElement("p");

    /* Etapa 2: montar e estilizar o conteúdo deste elemento/tag */

    paragrafo.classList.add(situacao);

    paragrafo.innerHTML= `${nome} - ${media} - ${situacao};`;

    /* Etapa 3:adionar o novo elemento ao DOM */

    divresultados.appendChild(paragrafo);

    //reset no formulário (Limpar os campos)
    formulario.reset();

    // devolver cursor para o campo nome
    camponome.focus();

    console.log(nome,nota1,nota2, media, situacao);
});
