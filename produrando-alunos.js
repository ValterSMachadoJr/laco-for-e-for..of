const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno){
    if (listaDeAlunosEMedias[0].includes(aluno)) { 
        console.log(`${aluno} está cadastrado!`);
        const indice = listaDeAlunosEMedias[0].indexOf(aluno) // pegando o índice do aluno passado no 
                                                          // parâmetro
       console.log(indice)
       const mediaDoAluno = listaDeAlunosEMedias[1][indice];
       console.log(`${aluno} tem a média ${mediaDoAluno}.`);

    } else {
        console.log("Aluno não encontrado!");
    }
}

exibeNomeENota("Juliana");

//O método includes() verifica se o parâmetro passado para ele está incluso na lista. 
//Quando está incluso, o retorno será o valor booleano true (verdadeiro).