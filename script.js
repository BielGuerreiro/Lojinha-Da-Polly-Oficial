document.querySelectorAll(".bx-heart, .bxs-heart").forEach((icon) => {
  icon.addEventListener("click", function (e) {
    e.preventDefault();

    if (this.classList.contains("bx-heart")) {
      this.classList.remove("bx-heart");
      this.classList.add("bxs-heart");
    } else {
      this.classList.remove("bxs-heart");
      this.classList.add("bx-heart");
    }
  });
});

// seta dos market  ____________________________________________________________
const container = document.querySelector(".container-wrapper");
const btnLeft = document.querySelector(".arrow.left");
const btnRight = document.querySelector(".arrow.right");

const scrollAmount = 270;

btnLeft.addEventListener("click", () => {
  container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
});

btnRight.addEventListener("click", () => {
  container.scrollBy({ left: scrollAmount, behavior: "smooth" });
});

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

  // Fechar favoritos
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
    let total = 0;

    precos.forEach(function (precoEl) {
      const texto = precoEl.textContent
        .replace("R$", "")
        .replace(",", ".")
        .trim();
      const valor = parseFloat(texto);
      if (!isNaN(valor)) {
        total += valor;
      }
    });

    const precoFormatado = total.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    precoTotalEl.textContent = precoFormatado;
  }

  function adicionarFavorito(imagemUrl, precoTexto, quantidade, cor, tamanho) {
    const produto = document.createElement("div");
    produto.classList.add("produto-favorito");

    produto.innerHTML = `
      <img src="${imagemUrl}" alt="Produto Favorito" class="imagem-favorito">
      <div class="info-favorito">
        <p class="preco">${precoTexto}</p>
        <p class="cor-favorito"><strong>Cor:</strong> ${cor}</p>
        <p class="tamanho-favorito"><strong>Tamanho:</strong> ${tamanho}</p>
        <p class="quantidade-favorito"><strong>Quantidade:</strong> ${quantidade}</p>
        <span class="coracao desfavoritar">❤️</span>
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

// cor e quantidade ___________________________________________________________________
document.querySelectorAll(".controle-quantidade").forEach(function (controle) {
  const diminuir = controle.querySelector(".diminuir");
  const aumentar = controle.querySelector(".aumentar");
  const valor = controle.querySelector(".valor-quantidade");

  diminuir.addEventListener("click", function () {
    let atual = parseInt(valor.textContent);
    if (atual > 1) {
      valor.textContent = atual - 1;
    }
  });

  aumentar.addEventListener("click", function () {
    let atual = parseInt(valor.textContent);
    valor.textContent = atual + 1;
  });
});

// cor selecionada _____________________________________________________________________________________
document.querySelectorAll(".opcoes-cor").forEach(function (grupoCor) {
  const botoes = grupoCor.querySelectorAll(".btn-cor");

  botoes.forEach(function (botao) {
    botao.addEventListener("click", function () {
      botoes.forEach((b) => b.classList.remove("selecionado"));
      botao.classList.add("selecionado");
    });
  });
});

// Seleção de tamanho ______________
document.querySelectorAll(".opcoes-tamanho").forEach(function (grupoTamanho) {
  const botoes = grupoTamanho.querySelectorAll(".btn-tamanho");

  botoes.forEach(function (botao) {
    botao.addEventListener("click", function () {
      botoes.forEach((b) => b.classList.remove("selecionado"));
      botao.classList.add("selecionado");
    });
  });
});
