let tamanhoSelecionado = "";
let quantidadeSelecionada = "";
let corSelecionada = "";

document.addEventListener("DOMContentLoaded", () => {
  // Botões de tamanho ________________________________________________________________________
  const botoesTamanho = document.querySelectorAll(".botao-tamanho");
  botoesTamanho.forEach((botao) => {
    botao.addEventListener("click", () => {
      botoesTamanho.forEach((btn) => btn.classList.remove("selecionado"));
      botao.classList.add("selecionado");
      tamanhoSelecionado = botao.dataset.tamanho;
      console.log("Tamanho selecionado:", tamanhoSelecionado);
    });
  });

  // Botões de quantidade _______________________________________________________________________________
  const botoesQuantidade = document.querySelectorAll(".botao-quantidade");
  const expandirBtn = document.getElementById("expandir-quantidade");
  const quantidadeExtra = document.getElementById("quantidade-extra");

  botoesQuantidade.forEach((botao) => {
    botao.addEventListener("click", () => {
      botoesQuantidade.forEach((btn) => btn.classList.remove("selecionado"));
      botao.classList.add("selecionado");
      quantidadeSelecionada = botao.dataset.quantidade;
      console.log("Quantidade selecionada:", quantidadeSelecionada);
    });
  });

  expandirBtn.addEventListener("click", () => {
    quantidadeExtra.style.display = "contents";
    expandirBtn.style.display = "none";
  });

  // Botões de cor ____________________________________________________________________________________
  const botoesCor = document.querySelectorAll(".botao-cor");
  botoesCor.forEach((botao) => {
    botao.addEventListener("click", () => {
      botoesCor.forEach((btn) => btn.classList.remove("selecionado"));
      botao.classList.add("selecionado");
      corSelecionada = botao.dataset.cor;
      console.log("Cor selecionada:", corSelecionada);
    });
  });

  // Botão "Comprar Agora" ___________________________________________________________________________________
  const botaoComprar = document.getElementById("botao-comprar");
  botaoComprar.addEventListener("click", () => {
    if (!tamanhoSelecionado || !quantidadeSelecionada || !corSelecionada) {
      alert("Por favor, selecione tamanho, quantidade e cor antes de comprar.");
      return;
    }

    const nomeProduto = document.getElementById("nome-produto").textContent;
    const numeroWhatsApp = "5511976884784";

    const mensagemWhatsApp = `Olá! Quero comprar o produto *${nomeProduto}* com as seguintes opções:\n- Tamanho: ${tamanhoSelecionado}\n- Quantidade: ${quantidadeSelecionada}\n- Cor: ${corSelecionada}`;
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
      mensagemWhatsApp
    )}`;

    const mensagemConfirmacao = `
    Você selecionou:<br>
    Tamanho: ${tamanhoSelecionado}<br>
    Quantidade: ${quantidadeSelecionada}<br>
    Cor: ${corSelecionada}<br><br>
    Deseja continuar para o WhatsApp?`;

    mostrarConfirmacao(mensagemConfirmacao, (confirmado) => {
      if (confirmado) {
        window.open(urlWhatsApp, "_blank");
      }
    });
  });

  // botao de aviso  _______________________________________________
  function mostrarConfirmacao(mensagem, callback) {
    const caixa = document.getElementById("confirmacao-custom");
    const texto = document.getElementById("mensagem-confirmacao");
    const btnConfirmar = document.getElementById("btn-confirmar");
    const btnCancelar = document.getElementById("btn-cancelar");

    texto.innerHTML = mensagem;
    caixa.style.display = "flex";

    btnConfirmar.onclick = null;
    btnCancelar.onclick = null;

    btnConfirmar.onclick = () => {
      caixa.style.display = "none";
      callback(true);
    };

    btnCancelar.onclick = () => {
      caixa.style.display = "none";
      callback(false);
    };
  }
});

// indicadror ______________________________________________________________________________________
var imagens = document.querySelectorAll(".img-produto");
var bolinhas = document.querySelectorAll(".bolinha");

var indexAtual = 0;

function mostrarImagem(index) {
  for (var i = 0; i < imagens.length; i++) {
    imagens[i].classList.remove("ativa");
    bolinhas[i].classList.remove("ativa");
  }

  imagens[index].classList.add("ativa");
  bolinhas[index].classList.add("ativa");
  indexAtual = index;
}

for (var i = 0; i < bolinhas.length; i++) {
  bolinhas[i].addEventListener("click", function () {
    var index = parseInt(this.getAttribute("data-index"));
    mostrarImagem(index);
  });
}
