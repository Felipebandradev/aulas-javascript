        // (ctrl;), atalho para contario uma linha
        /* (shift alt a) comentario de varia linhas */

        /* comando de saìda */
        console.log("Olá javascript");

        // outros comandos de saída (mais antigos )
        // document.write("Saída direta na Pagina");
        // alert("Janela de dialogo para saída");


        /*
         criar espaços de armazenamento na Memória Ram
        
         variaveís e constante 

         Variaveis: declarados coma palavra let ou var
        
         Contantes: declarados com a palavra const
        */

        const nome="Chapolin Colorado";
        let ano= 2023;

        //declarando variaveis (sem atribuição)
        let curso,escola,uc= "cuzcuz";// varias separadas por virgula
        let cidade;// uma unica

        console.log(nome);
        console.log(ano);
        console.log(uc);

        //apenas declarando (somente variaveis)
        // const teste ;(Não Funciona)

        curso = "Téc. informatica para internet";
        escola ='senac';
        uc= 3;
        cidade = "São Paulo"

        let preco= 1457.88;//exemplo numero "quebrado"

        /* Quando o dado ase trata de texto (incluindo símbolos e outros) caracteres, ele deve ser colocado entre aspas (simples ou duplas ). quando se trata de valor numérico(inteiro  ou decimal), não use */

        //saída de dados

        console.log( curso, uc);
        console.log(escola, cidade);

        /* Saída de Dados combinados dinâmicos (variaveis e constantes) com textos/frases mais elaboradas. */
        /*  Frase de exemplo para saída:
        ola me chamo chapolin colorado estou fazendo  tec. informatica para internet no senac  (2023).*/

        // Forma1: Concatenação(Tradicional Antiga)
        console.log("olá,me chamo "+nome+" e estou fazendo "+curso+" no "+escola+" ("+ano+")");

        //Forma 2:Template literal/String (moderna)

        console.log(`Olá, me chamo ${nome} e estou fezendo o ${curso} no ${escola} (${ano})`);