var btcalcular = document.querySelector(".calcular");

function verificarDados(altura,peso,nome){
    var vazio = false
    
    if (altura == " " || peso == " " || altura.length <= 0 || peso.length <= 0 || nome.length <= 0){
        vazio = true
    }

    return vazio;
}

function verificarPeso(imc){
    var mensagem;

    if (imc >= 18.6 && imc <= 24.9){
        mensagem = "com o peso normal"
    }

    if (imc >= 25.0 && imc <= 29.9){
        mensagem = "com Sobrepeso"
    }

    if(imc >= 30.0){
        mensagem = "com Obesidade"
    }

    return mensagem;
}

function calcular(peso,altura){    
    var result = document.querySelector(".result");
    var altura = Number(document.querySelector(".altura").value);
    var peso = Number(document.querySelector(".peso").value);
    var nome = document.querySelector(".nome").value;
    
    if (verificarDados(altura,peso,nome) == true){
        alert("Preencha todos os campos!")
        return;
    } else {
        var imc = peso / (altura * altura);
        var msg = verificarPeso(imc)
        result.innerHTML = `${nome} seu IMC é ${imc.toFixed(2)} <br> e voce esta ${msg}`;
    }
}

btcalcular.addEventListener('click', calcular);

