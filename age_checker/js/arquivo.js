



document.querySelector("#btn").addEventListener("click", principal);

function background(color) {
    document.body.style.background = color;
}

function data_atual() {
    return new Date();
}

function calc_idade() {
    return data_atual().getFullYear() - (Number(document.querySelector("#ano").value));

}

function validacao() {
    var ano_digitado = document.querySelector("#ano").value;
    var div_resposta = document.querySelector("#mensagem");

    var genero = "";


    if (ano_digitado == 0 || ano_digitado < 1900 || ano_digitado > data_atual().getFullYear()) {
        div_resposta.innerHTML = "<p class='erro'>Preencha corretamente todos os campos</p>";
        document.querySelector("#ano").focus();
        document.querySelector("#ano").setAttribute("class", "borda");
    } else {
        if (document.getElementsByName("sexo")[0].checked || document.getElementsByName("sexo")[1].checked) {
            remove_borda();

            var url = ""; // url das imagens

            if (document.getElementsByName("sexo")[0].checked) {

                if (calc_idade() >= 0 && calc_idade() < 10) {
                    genero = "Criança [Masculino]";
                    url = ("img/foto-bebe-m.jpg"); //url para criança

                } else if (calc_idade() >= 10 && calc_idade() < 18) {
                    genero = "Adolescente [Masculino]";
                    url = ("src", "img/foto-jovem-m.jpg"); // url para jovem

                } else if (calc_idade() >= 18 && calc_idade() <= 50) {
                    genero = "Adulto [Masculino]";
                    url = ("src", "img/foto-adulto-m.jpg"); // url para adulto

                } else {
                    genero = "Idoso [Masculino]";
                    url = ("src", "img/foto-idoso-m.jpg"); // url para idoso

                }
            } else {
                if (calc_idade() >= 0 && calc_idade() < 10) {
                    genero = "Criança [Feminino]";
                    url = ("src", "img/foto-bebe-f.jpg");

                } else if (calc_idade() >= 10 && calc_idade() < 18) {
                    genero = "Adolescente [Feminino]";
                    url = ("src", "img/foto-jovem-f.jpg")

                } else if (calc_idade() >= 18 && calc_idade() <= 50) {
                    genero = "Adulto [Feminino]";
                    url = ("src", "img/foto-adulto-f.jpg");

                } else {
                    genero = "Idoso [Feminino]";
                    url = ("src", "img/foto-idoso-f.jpg");

                }
            }

            div_resposta.innerHTML = `<p class='age'>Idade: ${calc_idade()} ${genero}</p>`;

            montar_imagem(url);// chama a função que irá montar as nossas imagens

            limpar();//chamando btn para limpar


        } else {
            div_resposta.innerHTML = "<p class='erro'>Preencha o sexo</p>";
        }
    }



}

// btn que limpa todos os regitros
function limpar() {
    var btn = document.createElement("input");
    btn.type = "button";
    btn.value = "Limpar";
    btn.setAttribute("id", "clear");

    document.querySelector("#mensagem").appendChild(btn);


    btn.addEventListener("click", () => {
        document.querySelector("#mensagem").innerHTML = "";
        document.querySelector("#ano").value = "";
        document.querySelector("#ano").classList.remove("borda")
        document.querySelector("#ano").focus();
    })

}

function remove_borda() {
    // verifica se a borda existe. Se existe, remove
    if (document.querySelector("#ano").classList.contains("borda")) {
        document.querySelector("#ano").classList.remove("borda");
    }
}


function montar_imagem(url) {
    var img = document.createElement("img"); // cria a imagem

    img.setAttribute("src", url); // adiciona um src para acessar a url do caminho da img
    img.setAttribute("id", "imagem");// adicionamos um id


    return document.querySelector("#mensagem").appendChild(img); // a nossa imagem será filha da div msgm

}


function principal() {
    validacao();
}



