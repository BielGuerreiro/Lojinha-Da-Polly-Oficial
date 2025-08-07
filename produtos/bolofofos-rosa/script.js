// video ___________________________
const video = document.getElementById("videoProduto");

video.addEventListener("ended", () => {
  video.controls = true; // Mostra os controles (incluindo botão de play)
});

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

// box do menu ________________________________________________________________________________
const menu = document.querySelector(".menu");
const overlay = document.querySelector(".menu-overlay");
const menuItems = document.querySelectorAll(".menu li");
const contents = document.querySelectorAll(".menu-content");

// Mostrar overlay e conteúdo ao passar o mouse sobre o item
menuItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    const target = item.getAttribute("data-menu");
    overlay.style.display = "block";
    contents.forEach((c) => (c.style.display = "none"));
    const content = document.getElementById("menu-" + target);
    if (content) content.style.display = "block";
  });
});

menu.addEventListener("mouseenter", () => {
  overlay.style.display = "block";
});

menu.addEventListener("mouseleave", () => {
  overlay.style.display = "none";
  contents.forEach((c) => (c.style.display = "none"));
});

overlay.addEventListener("mouseenter", () => {
  overlay.style.display = "block";
});

overlay.addEventListener("mouseleave", () => {
  overlay.style.display = "none";
  contents.forEach((c) => (c.style.display = "none"));
});

// mudar de cor o texto do menu ___________________________________________________________

const header = document.querySelector("header");

menuItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    const target = item.getAttribute("data-menu");
    overlay.style.display = "block";
    header.classList.add("overlay-ativo"); // aplica no header

    contents.forEach((c) => (c.style.display = "none"));
    const content = document.getElementById("menu-" + target);
    if (content) content.style.display = "block";
  });
});

menu.addEventListener("mouseleave", () => {
  overlay.style.display = "none";
  header.classList.remove("overlay-ativo");

  contents.forEach((c) => (c.style.display = "none"));
});

overlay.addEventListener("mouseleave", () => {
  overlay.style.display = "none";
  header.classList.remove("overlay-ativo");

  contents.forEach((c) => (c.style.display = "none"));
});

// barra de pesquisa ___________________________________________________________________
const abrirBusca = document.getElementById("abrirBusca");
const barraPesquisa = document.getElementById("barraPesquisa");
const fecharPesquisa = document.querySelector(".fechar-pesquisa");

abrirBusca.addEventListener("click", () => {
  barraPesquisa.style.display =
    barraPesquisa.style.display === "block" ? "none" : "block";
});

fecharPesquisa.addEventListener("click", () => {
  barraPesquisa.style.display = "none";
});

// conjuntos da barra de pesquisa ______________________________________________________// ________

const produtos = [
  {
    nome: "conjunto stitch",
    link: "https://music.youtube.com/watch?v=d95SloJUTGs&list=RDAMVMROR925E5sJw",
  },
  { nome: "conjunto trolls", link: "#", imagem: "img/trolls 2.jpg" },
  { nome: "conjunto lol", link: "#", imagem: "img/saia lol 2.jpg" },
  { nome: "conjunto realeza", link: "#", imagem: "img/realeza 4.jpg" },
  { nome: "conjunto peppa pig", link: "#", imagem: "img/peppa 1.jpg" },
  { nome: "conjunto minnie rosa", link: "#", imagem: "img/minnie rosa 1.jpg" },
  {
    nome: "conjunto poderosa chefinha",
    link: "#",
    imagem: "img/chefinha 3.jpg",
  },
  {
    nome: "conjunto bolofofos-rosa",
    link: "#",
    imagem: "img/bolofofos rosa 1.jpg",
  },
  { nome: "conjunto monstro s/a", link: "#", imagem: "img/monstro sa 2.jpg" },
  { nome: "conjunto moana", link: "#", imagem: "img/moana 1.jpg" },
  {
    nome: "conjunto maria clara e jp",
    link: "#",
    imagem: "img/maria clara 1.jpg",
  },
  { nome: "conjunto magali", link: "#", imagem: "img/magali 1.jpg" },
  { nome: "conjunto show da luna", link: "#", imagem: "img/luna 2.jpg" },
  {
    nome: "conjunto bolofofos-lilas",
    link: "#",
    imagem: "img/bolofofos lilas 3.jpg",
  },
  {
    nome: "conjunto bela e a fera",
    link: "#",
    imagem: "img/bela e a fera 2.jpg",
  },
  { nome: "conjunto sereia ariel", link: "#", imagem: "img/ariel 1.jpg" },
];

// codigo img pesquisar _+_________________________________________________________________________
const inputBusca = document.querySelector(".barra-pesquisa input");
const resultadoBusca = document.getElementById("resultadoBusca");

inputBusca.addEventListener("input", () => {
  const termo = inputBusca.value.toLowerCase().trim();
  mostrarProdutos(termo);
});

function mostrarProdutos(termo) {
  const filtrados = produtos.filter((produto) =>
    produto.nome.toLowerCase().includes(termo)
  );

  if (termo === "" || filtrados.length === 0) {
    resultadoBusca.style.display = "none";
    return;
  }

  resultadoBusca.style.display = "block";

  resultadoBusca.innerHTML = `
    <div class="resultado-busca-container">
      ${filtrados
        .map(
          (produto) => `
        <div>
          <img src="${produto.imagem}" alt="${produto.nome}" />
          <a href="${produto.link}">${produto.nome}</a>
        </div>
      `
        )
        .join("")}
    </div>
  `;
}

// trocar os terxtos _________________________________________________
function mostrarProdutos(termo) {
  const filtrados = produtos.filter((produto) =>
    produto.nome.toLowerCase().includes(termo)
  );

  if (termo === "" || filtrados.length === 0) {
    resultadoBusca.style.display = "none";
    resultadoBusca.innerHTML = "";
    return;
  }

  resultadoBusca.style.display = "block";

  resultadoBusca.innerHTML = `
    <div class="resultado-busca-container">
      ${filtrados
        .map((produto, index) => {
          const nomeProduto = produto.nome;
          const regex = new RegExp(`(${termo})`, "gi");
          const nomeComDestaque = nomeProduto.replace(regex, `<span>$1</span>`);

          const bordaCor = index === 0 ? "2px solid blue" : "2px solid red";

          return `
  <div class="item-busca ${index === 0 ? "destaque" : ""}">
    <a href="${
      produto.link
    }" style="text-decoration: none; color: var(--tertiary-color); font-size: 18px;">
      ${nomeComDestaque}
    </a>
  </div>
`;
        })
        .join("")}
    </div>
  `;
}

// fundo borrado quando abrir a pesquisa ___________________________________________________________________________________
const fundoEscuro = document.getElementById("fundoEscuro");

// Abrir
abrirBusca.addEventListener("click", () => {
  barraPesquisa.style.display = "block";
  fundoEscuro.style.display = "block";
  inputBusca.focus();
});

// Fechar
function fecharBarraPesquisa() {
  barraPesquisa.style.display = "none";
  fundoEscuro.style.display = "none";
  inputBusca.value = "";
  resultadoBusca.innerHTML = "";
  resultadoBusca.style.display = "none";
}

fecharPesquisa.addEventListener("click", fecharBarraPesquisa);
fundoEscuro.addEventListener("click", fecharBarraPesquisa);

/* icones favorito e carrinho _____________________________________________________________ */
document.addEventListener("DOMContentLoaded", function () {
  const heartIcon = document.getElementById("heart");
  const favoritos = document.getElementById("favoritos");
  const closeFavoritos = document.getElementById("close-favoritos");
  const fundoEscuro = document.getElementById("fundoEscuro2");
  const lateralFavoritos = document.querySelector("#favoritos .lateral");
  const productCount = document.getElementById("product-count");
  const precoTotalEl = document.getElementById("preco-total");

  function fecharTudo() {
    favoritos.classList.remove("active");
    fundoEscuro.style.display = "none";
  }

  favoritos.addEventListener("click", function (event) {
    event.stopPropagation();
  });

  fundoEscuro.addEventListener("click", fecharTudo);
  closeFavoritos.addEventListener("click", fecharTudo);

  heartIcon.addEventListener("click", function (event) {
    event.preventDefault();
    favoritos.classList.add("active");
    fundoEscuro.style.display = "block";
  });

  function atualizarContador() {
    const total = lateralFavoritos.querySelectorAll(".produto-favorito").length;
    productCount.textContent = total;
  }

  function atualizarPrecoTotal() {
    const precos = lateralFavoritos.querySelectorAll(
      ".produto-favorito .preco"
    );
    const quantidades = lateralFavoritos.querySelectorAll(
      ".produto-favorito .quantidade-favorito"
    );
    let total = 0;

    precos.forEach(function (precoEl, index) {
      const texto = precoEl.textContent
        .replace("R$", "")
        .replace(",", ".")
        .trim();
      const valor = parseFloat(texto);
      const qtdTexto = quantidades[index].textContent.replace(/\D/g, "");
      const qtd = parseInt(qtdTexto) || 1;

      if (!isNaN(valor)) {
        total += valor * qtd;
      }
    });

    const precoFormatado = total.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    precoTotalEl.textContent = precoFormatado;
  }

  function adicionarFavorito(imagemUrl, precoTexto, quantidade, cor, tamanho) {
    const produtos = lateralFavoritos.querySelectorAll(".produto-favorito");

    for (let produto of produtos) {
      const img = produto.querySelector("img").src;
      const corTexto = produto.querySelector(".cor-favorito").textContent;
      const tamanhoTexto =
        produto.querySelector(".tamanho-favorito").textContent;

      if (
        img === imagemUrl &&
        corTexto.includes(cor) &&
        tamanhoTexto.includes(tamanho)
      ) {
        const qtdEl = produto.querySelector(".quantidade-favorito");
        const qtdAtual = parseInt(qtdEl.textContent.replace(/\D/g, "")) || 1;
        const novaQtd = qtdAtual + parseInt(quantidade);
        qtdEl.innerHTML = `<strong>Quantidade:</strong> ${novaQtd}`;
        atualizarPrecoTotal();
        return;
      }
    }

    const produto = document.createElement("div");
    produto.classList.add("produto-favorito");

    produto.innerHTML = `
      <img src="${imagemUrl}" alt="Produto Favorito" class="imagem-favorito">
      <div class="info-favorito">
        <p class="preco">${precoTexto}</p>
        <p class="cor-favorito"><strong>Cor:</strong> ${cor}</p>
        <p class="tamanho-favorito"><strong>Tamanho:</strong> ${tamanho}</p>
        <p class="quantidade-favorito"><strong>Quantidade:</strong> ${quantidade}</p>
        <span class="desfavoritar"><i class='bx bx-trash'></i></span>
      </div>
    `;

    lateralFavoritos.appendChild(produto);
    atualizarContador();
    atualizarPrecoTotal();

    const coracao = produto.querySelector(".desfavoritar");
    coracao.addEventListener("click", function () {
      produto.remove();
      atualizarContador();
      atualizarPrecoTotal();
    });
  }

  const botoesFavorito = document.querySelectorAll(
    ".produto-wrapper .favoritar"
  );

  botoesFavorito.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const produtoWrapper = btn.closest(".produto-wrapper");
      const imagem = produtoWrapper.querySelector("img").getAttribute("src");
      const preco = produtoWrapper.querySelector(".preco-produto").textContent;

      const quantidadeEl = produtoWrapper.querySelector(".valor-quantidade");
      const quantidade = quantidadeEl ? quantidadeEl.textContent.trim() : "1";

      const corSelecionada = produtoWrapper.querySelector(
        ".btn-cor.selecionado"
      );
      const cor = corSelecionada
        ? corSelecionada.classList.contains("azul")
          ? "Azul"
          : "Vermelho"
        : "Não selecionada";

      const tamanhoSelecionado = produtoWrapper.querySelector(
        ".btn-tamanho.selecionado"
      );
      const tamanho = tamanhoSelecionado
        ? tamanhoSelecionado.getAttribute("data-tamanho")
        : "Não selecionado";

      adicionarFavorito(imagem, preco, quantidade, cor, tamanho);
      favoritos.classList.add("active");
      fundoEscuro.style.display = "block";
    });
  });

  const btnFinalizar = document.getElementById("btn-finalizar");
  btnFinalizar.addEventListener("click", function () {
    alert("Compra finalizada! (Aqui você pode redirecionar para o checkout)");
  });

  document.querySelectorAll(".opcoes-cor").forEach(function (grupoCor) {
    const botoes = grupoCor.querySelectorAll(".btn-cor");

    botoes.forEach(function (botao) {
      botao.addEventListener("click", function () {
        botoes.forEach((b) => b.classList.remove("selecionado"));
        botao.classList.add("selecionado");
      });
    });
  });

  document.querySelectorAll(".opcoes-tamanho").forEach(function (grupoTamanho) {
    const botoes = grupoTamanho.querySelectorAll(".btn-tamanho");

    botoes.forEach(function (botao) {
      botao.addEventListener("click", function () {
        botoes.forEach((b) => b.classList.remove("selecionado"));
        botao.classList.add("selecionado");
      });
    });
  });

  document
    .querySelectorAll(".controle-quantidade")
    .forEach(function (controle) {
      const diminuir = controle.querySelector(".diminuir");
      const aumentar = controle.querySelector(".aumentar");
      const valorEl = controle.querySelector(".valor-quantidade");

      diminuir.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        let valor = parseInt(valorEl.textContent.trim());
        if (!isNaN(valor) && valor > 1) {
          valorEl.textContent = valor - 1;
        }
      });

      aumentar.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        let valor = parseInt(valorEl.textContent.trim());
        if (!isNaN(valor)) {
          valorEl.textContent = valor + 1;
        }
      });
    });
});

// cor selecionada
document.querySelectorAll(".opcoes-cor").forEach(function (grupoCor) {
  const botoes = grupoCor.querySelectorAll(".btn-cor");

  botoes.forEach(function (botao) {
    botao.addEventListener("click", function () {
      botoes.forEach((b) => b.classList.remove("selecionado"));
      botao.classList.add("selecionado");
    });
  });
});

// Seleção de tamanho
document.querySelectorAll(".opcoes-tamanho").forEach(function (grupoTamanho) {
  const botoes = grupoTamanho.querySelectorAll(".btn-tamanho");

  botoes.forEach(function (botao) {
    botao.addEventListener("click", function () {
      botoes.forEach((b) => b.classList.remove("selecionado"));
      botao.classList.add("selecionado");
    });
  });
});

// usuario_________________________________________________________________________________
const btnUsuario = document.getElementById("usuario");
const boxUsuario = document.getElementById("boxUsuario");

btnUsuario.addEventListener("click", function () {
  boxUsuario.style.display =
    boxUsuario.style.display === "block" ? "none" : "block";
});

// Fecha ao clicar fora
document.addEventListener("click", function (e) {
  if (!boxUsuario.contains(e.target) && !btnUsuario.contains(e.target)) {
    boxUsuario.style.display = "none";
  }
});
