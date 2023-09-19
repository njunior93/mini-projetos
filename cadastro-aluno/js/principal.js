const btoAdicionar = document.querySelector('.bto-cadastrar');
const btoExcluir = document.querySelector('.bto-excluir');
const btoSalvar = document.querySelector('.bto-salvar');
const btoFechar = document.querySelector('.close-modal');
const tabela = document.querySelector('.tabela-alunos');
const modal = document.querySelector('.fade');
var formModal = document.querySelector('.formulario-modal');
const acao = document.querySelector('.info-acao');
var lista_alunos = [];

function setlistaAlunos(dado){
    lista_alunos.push(dado)
}

function getlistaAlunos(){
    return lista_alunos;
}


//adicionar cadastro

btoAdicionar.addEventListener('click', function(event){
    event.preventDefault();

    var form = document.querySelector('.formulario')

    var aluno = obterAluno(form);

    //validar cadastro
    
    var erros = verificarErros(aluno);

    if(erros.length > 0){
        mostrarErros(erros,"cadastro");
        return;
    }

    //incluir cadastro na lista
    setlistaAlunos(aluno);
     
    //preenche a tabela com os alunos cadastrados na lista
    atualizarAlunos();
    
    form.reset();
    var msgErros = document.querySelector('.erros');
    msgErros.innerHTML = "";
});

//excluir cadastro

tabela.addEventListener('click', function(event){
    var elementoClicado = event.target; //pegando o evento clicado
    var lista = getlistaAlunos(); 
    var posicaoTr = elementoClicado.parentNode.rowIndex - 1; //pegando a posicao da linha clicada
    
   if(elementoClicado.classList.contains("info-acao-excluir")){ 
        lista.forEach(function(i,posicao){
            if (posicaoTr == posicao){         
                excluirAluno(lista,posicao);            
            }
            atualizarAlunos();
        });
   }
});

//editar cadastro

tabela.addEventListener('click',function(event){
    var elementoClicado = event.target; 
    var lista = getlistaAlunos();
    var posicaoTr = elementoClicado.parentNode.rowIndex - 1; //pegando a posicao da linha clicada

    if(elementoClicado.classList.contains("info-acao-editar")){ 
        modal.classList.toggle('hide');
        lista.forEach(function(i,posicao){
            if(posicaoTr == posicao){
                formModal.index.value= posicao
                formModal.nome.value = i.nome;
                formModal.nota1.value = i.nota1;
                formModal.nota2.value = i.nota2;
            };         
        });
    };
});

btoSalvar.addEventListener('click',function(event){
    event.preventDefault();
    
    var aluno = obterAluno(formModal)

    var erros = verificarErros(aluno);

    console.log(aluno.nota1);

    if(erros.length > 0){
        mostrarErros(erros,"modal");
        return;
    }

    modal.classList.add('hide');

    editarAluno(formModal,getlistaAlunos());

    atualizarAlunos();

    var msgErros = document.querySelector('.erros-modal');
    msgErros.innerHTML = "";
});

// fechar modal

btoFechar.addEventListener('click', function(){
    modal.classList.add('hide');

    atualizarAlunos();
    
    var msgErros = document.querySelector('.erros-modal');
    msgErros.innerHTML = "";
});

