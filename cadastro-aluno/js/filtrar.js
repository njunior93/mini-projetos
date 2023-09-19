var filtro = document.querySelector(".filtro");

filtro.addEventListener('click', function(){
    
    var alunos = document.querySelectorAll(".aluno");

    var status_situacao = filtro.options[filtro.selectedIndex].text;

    if(status_situacao != "Todos"){

        for(var i in alunos){
            var aluno = alunos[i];
            var tdStatus = aluno.querySelector('.info-status');
            var status = tdStatus.textContent;

            if(status_situacao != status){
                aluno.classList.add("invisivel");
            }else{
                aluno.classList.remove('invisivel');
            }

        }
    }else{
        for(var i in alunos){
            alunos[i].classList.remove("invisivel");
        }
    }
});


   
