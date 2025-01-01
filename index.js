function fecharCaixa(){
    document.getElementById('alert').style.display = "none";
}

function gerarNome(){
    if (dia.value == ""){
        document.getElementById('alert').style.display = "block";
    }

    let nome = "";

    if(dia.value >= 1 && dia.value <= 8){
        nome = "Desenvolvedor(a)"
    }else if(dia.value >= 9 && dia.value <= 18){
        nome = "Programador(a)"
    }else if(dia.value >= 19 && dia.value <= 26){
        nome = "Estagiário(a)"
    }else if(dia.value >= 27 && dia.value <= 31){
        nome = "Senior"
    }

    let sobrenome = "";

    if(mes.value == 1){
        sobrenome = "bugado(a)"
        console.log("Nome: ",nome,sobrenome);
    }else if(mes.value == 2){
        sobrenome = "do CTRL C, CTRL V"
        console.log("Nome: ",nome,sobrenome);
    }else if(mes.value == 3){
        sobrenome = "das gambiarras"
        console.log("Nome: ",nome,sobrenome);
    }else if(mes.value == 4){
        sobrenome = "que culpa o cache"
        console.log("Nome: ",nome,sobrenome);
    }else if(mes.value == 5){
        sobrenome = "que esquece o que faz"
        console.log("Nome: ",nome,sobrenome);
    }else if(mes.value == 6){
        sobrenome = "do git vazio"
        console.log("Nome: ",nome,sobrenome);
    }else if(mes.value == 7){
        sobrenome = "das try/catch vazia"
        console.log("Nome: ",nome,sobrenome);
    }else if(mes.value == 8){
        sobrenome = "famosinho(a) do linkedin"
        console.log("Nome: ",nome,sobrenome);
    }else if(mes.value == 9){
        sobrenome = "caçador(a) de bugs"
        console.log("Nome: ",nome,sobrenome);
    }else if(mes.value == 10){
        sobrenome = "do windows piratas"
        console.log("Nome: ",nome,sobrenome);
    }else if(mes.value == 11){
        sobrenome = "do update sem where"
        console.log("Nome: ",nome,sobrenome);
    }else if(mes.value == 12){
        sobrenome = "do commit bugado"
        console.log("Nome: ",nome,sobrenome);
    }

    resposta.innerHTML = nome + " " + sobrenome
}