const botao = document.getElementById("gerar");

botao.addEventListener("click", gerarCertificado);

function gerarCertificado() {

    const nome = document.getElementById("nome").value;
    const comidaSelecionada = document.querySelector('input[name="comida"]:checked');
    const bebidaSelecionada = document.querySelector('input[name="bebida"]:checked');

    if (!comidaSelecionada || !bebidaSelecionada) {
    alert("Escolha uma comida e uma bebida.");
    return;
    }

    const comida = comidaSelecionada.value;
    const bebida = bebidaSelecionada.value;

    const canvas = document.getElementById("certificado");
    const ctx = canvas.getContext("2d");

    const imagem = new Image();

    imagem.src = "template-certificado-junino.png";

    imagem.onload = function () {

        ctx.drawImage(imagem, 0, 0);
        ctx.font = "70px Beatiras";
        ctx.fillStyle = "#a03e3e";
        ctx.textAlign = "center";
        ctx.fillText(nome, 980, 410);

        ctx.font = "50px Beatiras";
        ctx.fillStyle = "#a03e3e";
        ctx.textAlign = "center";

        ctx.fillText(comida, 885, 875);
        ctx.fillText(bebida, 1512, 875);

        document.getElementById("baixar").style.display = "inline-block";
        document.querySelector(".aviso-download").style.display = "block";

    } 
}

const botaoBaixar = document.getElementById("baixar");

botaoBaixar.addEventListener("click", baixarCertificado);

function baixarCertificado(){

    alert(
    `Obrigada por participar da Beatiras Junina! 🌽🔥

    Compartilhe seu certificado e marque
    @beatiras_quadrinhos.`
    );

    const canvas = document.getElementById("certificado");

    const link = document.createElement("a");

    link.download = "certificado-festa-junina-universidade-beatiras.png";

    link.href = canvas.toDataURL("image/png");

    link.click();

}

const confirmacao = document.getElementById("confirmacao");

confirmacao.addEventListener("change", function(){

    const habilitar = this.checked;

    document.getElementById("nome").disabled = !habilitar;

    document.getElementById("gerar").disabled = !habilitar;

    document.querySelectorAll('input[name="comida"]').forEach(opcao=>{
        opcao.disabled = !habilitar;
    });

    document.querySelectorAll('input[name="bebida"]').forEach(opcao=>{
        opcao.disabled = !habilitar;
    });

});