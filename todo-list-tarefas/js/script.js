const lista = document.querySelector(".lista-tarefas");
var listaTarefas = [];

// criar tarefa

function visualizarTarefa(){ 
    var tarefa = document.createElement("li");
    var imgChecked = document.createElement("img");
    var paragrafo = document.createElement("p")
    var imgTrasher = document.createElement("img");

    listaTarefas.forEach(function(i, posicao){    
        
        tarefa.classList.add("item-tarefa");

        imgChecked.classList.add("bto-confirmar");
        imgChecked.src = "img/checked.png"
        imgChecked.onclick = function (){
            listaTarefas[posicao].confirmado = !listaTarefas[posicao].confirmado
            confirmarTarefa(i, tarefa);
        };

        paragrafo.innerText = i.conteudo;
       
        imgTrasher.classList.add("bto-remover");
        imgTrasher.src = "img/trash.png"
        imgTrasher.onclick = function (event){
            removerTarefa(posicao);
            var tarefaClicada = event.target;
            tarefaClicada.parentNode.remove();
            
        };

        tarefa.appendChild(imgChecked);
        tarefa.appendChild(paragrafo);
        tarefa.appendChild(imgTrasher);

        lista.appendChild(tarefa);

        console.log(listaTarefas)
    });
}

// adicionando tarefa

const botaoAdicionar = document.querySelector(".bto-adicionar");

botaoAdicionar.addEventListener('click', function(){
    var input = document.querySelector(".input-tarefa").value;
    var span = document.querySelector(".erro");

    if(input.length == 0 || input == 0){    
        span.innerText = "Preencha o campo";
        return;
    }else{
        span.innerText = "";
        listaTarefas.push({
            conteudo: input,
            confirmado: false
        });
    
        visualizarTarefa();
    }  

});

// remover tarefa

function removerTarefa(posicao){
    listaTarefas.splice(posicao,1);
}

// confirma tarefa

function confirmarTarefa(i, tarefa){
        if(i.confirmado == true){
            tarefa.classList.add("done")
        }else{
            tarefa.classList.remove("done")
        }
}






