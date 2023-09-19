function obterAluno(form){
    var aluno = {
        nome: form.nome.value,
        nota1: form.nota1.value,
        nota2: form.nota2.value,
        media: 0,
        reprovado: null
    }

    return aluno;
}

function montarTd(dado,classe){
    var td = document.createElement('td');
    td.classList.add(classe)
    td.textContent = dado

    return td;
}

function montarTr(aluno){
    var tr = document.createElement('tr');
    tr.classList.add("aluno")

    tdNome = montarTd(aluno.nome, "info-nome");
    tdNota1 = montarTd(aluno.nota1, "info-nota1");
    tdNota2 = montarTd(aluno.nota2, "info-nota2");

    aluno.media = calcularMedia(aluno.nota1,aluno.nota2);

    tdMedia = montarTd(aluno.media,"info-media");
    if (aluno.media < 7){
        aluno.reprovado = true;
        tdStatus = montarTd("Reprovado","info-status-reprovado");
        tdStatus.classList.add("info-status")
    }else if(aluno.media >= 7){
        aluno.reprovado = false;
        tdStatus = montarTd("Aprovado","info-status-aprovado");
        tdStatus.classList.add("info-status")
    }

    tdEditar = montarTd("EDITAR","info-acao-editar");
    tdExcluir = montarTd("EXCLUIR","info-acao-excluir");
    
    tr.appendChild(tdNome);
    tr.appendChild(tdNota1);
    tr.appendChild(tdNota2);
    tr.appendChild(tdMedia);
    tr.appendChild(tdStatus);
    tr.appendChild(tdEditar);
    tr.appendChild(tdExcluir);

    return tr;
}

function atualizarAlunos(){
    var tabela = document.querySelector(".tabela-alunos");
    tabela.innerHTML = "";

    for(var i in lista_alunos){
        var alunoTr = montarTr(lista_alunos[i]);
        tabela.appendChild(alunoTr);
    }      
} 


function calcularMedia(nota1,nota2){
    var media = (Number(nota1) + Number(nota2)) / 2;

    return media;
}

function verificarErros(aluno){
    var erros = [];
    var numero = /(?=(?:.*?[0-9]){1})/;

    if(aluno.nome.length == 0 || aluno.nota1.length == 0 || aluno.nota2.length == 0){
        erros.push("[Preencha todos os campos]");
    }

    if(numero.test(aluno.nome) == true){
        erros.push("[Preencha o campo corretamente]");
    }

    if(aluno.nota1 < 0 || aluno.nota1 > 10 || aluno.nota2 < 0 || aluno.nota2 > 10){
        erros.push("[Preencha o campo corretamente]");
    }

    return erros;
}

function mostrarErros(erros, tela){

    if(tela == "modal"){
        var listaErros = document.querySelector(".erros-modal");
        listaErros.innerHTML = "";
    }

    if(tela == "cadastro"){
        var listaErros = document.querySelector(".erros-formulario");
        listaErros.innerHTML = "";
    }
    
    for (var i in erros){
        var erro = document.createElement("li");
        erro.textContent = erros[i];
        erro.classList.add('erro');
        listaErros.appendChild(erro);
    }
}