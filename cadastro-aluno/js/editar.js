function editarAluno(form,lista){
    var index = form.index.value;
    var aluno = {
        nome: form.nome.value,
        nota1: form.nota1.value,
        nota2: form.nota2.value
    }

    lista[index] = aluno;
}