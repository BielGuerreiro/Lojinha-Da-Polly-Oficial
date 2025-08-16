// efeito universal __________________________________________________________________
const efeitos = ["efeito1", "efeito2", "efeito3", "efeito4", "efeito5"];

const elementos = document.querySelectorAll(
  efeitos.map((e) => `.${e}`).join(",")
);

const observer = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("visivel");
        observer.unobserve(entrada.target);
      }
    });
  },
  {
    threshold: 0.1,
  }
);

elementos.forEach((el) => observer.observe(el));
const responsivo = window.matchMedia("(max-width: 768px)").matches;

if (responsivo) {
  const produto3 = document.querySelector(".efeito3");

  if (produto3) {
    produto3.classList.remove("efeito3");
    produto3.classList.add("efeito1");
  }
}

// coracao ________________________________
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

// box do menu ________________________________________________________________________________
const menu = document.querySelector(".menu");
const overlay = document.querySelector(".menu-overlay");
const menuItems = document.querySelectorAll(".menu li");
const contents = document.querySelectorAll(".menu-content");

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
    header.classList.add("overlay-ativo");

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

// conjuntos da barra de pesquisa ______________________________________________________

const produtos = [
  {
    nome: "conjunto stitch",
    link: "#",
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

abrirBusca.addEventListener("click", () => {
  barraPesquisa.style.display = "block";
  fundoEscuro.style.display = "block";
  inputBusca.focus();
});

function fecharBarraPesquisa() {
  barraPesquisa.style.display = "none";
  fundoEscuro.style.display = "none";
  inputBusca.value = "";
  resultadoBusca.innerHTML = "";
  resultadoBusca.style.display = "none";
}

fecharPesquisa.addEventListener("click", fecharBarraPesquisa);
fundoEscuro.addEventListener("click", fecharBarraPesquisa);

/* barra lateral carrinho _____________________________________________________________ */
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

  heartIcon?.addEventListener("click", function (event) {
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

  function adicionarFavorito(
    imagemUrl,
    precoTexto,
    quantidade,
    cor,
    tamanho,
    nome
  ) {
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
    <p class="nome-produto"><strong>Produto:</strong> ${nome}</p>
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
      const nome =
        produtoWrapper.querySelector(".nome-produto")?.textContent.trim() ||
        "Produto";
      const quantidadeEl = produtoWrapper.querySelector(".valor-quantidade");
      const quantidade = quantidadeEl ? quantidadeEl.textContent.trim() : "1";

      let corSelecionada = produtoWrapper.querySelector(".btn-cor.selecionado");
      if (!corSelecionada) {
        corSelecionada = produtoWrapper.querySelector(".btn-cor");
        if (corSelecionada) corSelecionada.classList.add("selecionado");
      }
      const cor = corSelecionada
        ? corSelecionada.classList.contains("azul")
          ? "Azul"
          : corSelecionada.classList.contains("vermelho")
          ? "Vermelho"
          : "Cor padrão"
        : "Não disponível";

      let tamanhoSelecionado = produtoWrapper.querySelector(
        ".btn-tamanho.selecionado"
      );
      if (!tamanhoSelecionado) {
        tamanhoSelecionado = produtoWrapper.querySelector(".btn-tamanho");
        if (tamanhoSelecionado) tamanhoSelecionado.classList.add("selecionado");
      }
      const tamanho = tamanhoSelecionado
        ? tamanhoSelecionado.getAttribute("data-tamanho")
        : "Não disponível";

      adicionarFavorito(imagem, preco, quantidade, cor, tamanho);
      favoritos.classList.add("active");
      fundoEscuro.style.display = "block";
    });
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

  btnFinalizar.addEventListener("click", function (event) {
    event.preventDefault();

    const produtosFavoritos = [];

    document.querySelectorAll(".produto-favorito").forEach(function (produto) {
      const imagem = new URL(
        produto.querySelector("img").src,
        window.location.href
      ).href;
      const preco = produto.querySelector(".preco").textContent;
      const cor = produto
        .querySelector(".cor-favorito")
        .textContent.replace("Cor:", "")
        .trim();
      const tamanho = produto
        .querySelector(".tamanho-favorito")
        .textContent.replace("Tamanho:", "")
        .trim();
      const quantidade = produto
        .querySelector(".quantidade-favorito")
        .textContent.replace("Quantidade:", "")
        .trim();

      let nome = "Produto";
      document.querySelectorAll(".produto-wrapper").forEach(function (wrapper) {
        const img = new URL(
          wrapper.querySelector("img").src,
          window.location.href
        ).href;
        if (img === imagem) {
          const nomeElemento = wrapper.querySelector(".nome-produto");
          if (nomeElemento) {
            nome = nomeElemento.textContent.trim();
          }
        }
      });

      produtosFavoritos.push({ imagem, preco, cor, tamanho, quantidade, nome });
    });

    localStorage.setItem("produtosCompra", JSON.stringify(produtosFavoritos));

    window.location.href = "all-compra/index.html";
  });
});

// usuario_________________________________________________________________________________
const btnUsuario = document.getElementById("usuario");
const boxUsuario = document.getElementById("boxUsuario");

btnUsuario.addEventListener("click", function () {
  boxUsuario.style.display =
    boxUsuario.style.display === "block" ? "none" : "block";
});

document.addEventListener("click", function (e) {
  if (!boxUsuario.contains(e.target) && !btnUsuario.contains(e.target)) {
    boxUsuario.style.display = "none";
  }
});

// menu responsivo __________________________________________________________________
const iconeMenu = document.getElementById("iconeMenu");
const menuLateral = document.querySelector(".menu-lateral");
const setaToggle = document.querySelector(".seta-toggle");
const linksExpandidos = document.querySelector(".links-expandidos");
const linhaBaixo = document.querySelector(".linha-baixo");

iconeMenu.addEventListener("click", (e) => {
  e.stopPropagation();

  menuLateral.classList.toggle("active");

  if (menuLateral.classList.contains("active")) {
    iconeMenu.classList.remove("bx-menu");
    iconeMenu.classList.add("bx-x");
    iconeMenu.classList.add("menu-aberto");
  } else {
    iconeMenu.classList.remove("bx-x");
    iconeMenu.classList.add("bx-menu");
    iconeMenu.classList.remove("menu-aberto");
  }
});

setaToggle.addEventListener("click", () => {
  const isOpen = linksExpandidos.style.maxHeight === "200px";

  if (isOpen) {
    linksExpandidos.style.maxHeight = "0";
    linksExpandidos.style.opacity = "0";
    linhaBaixo.style.transform = "translateY(0)";
    setaToggle.classList.remove("bx-chevron-down");
    setaToggle.classList.add("bx-chevron-right");
  } else {
    linksExpandidos.style.maxHeight = "200px";
    linksExpandidos.style.opacity = "1";
    linhaBaixo.style.transform = "translateY(20px)";
    setaToggle.classList.remove("bx-chevron-right");
    setaToggle.classList.add("bx-chevron-down");
  }
});

const titulos = document.querySelectorAll(".titulo-menu");

titulos.forEach((titulo) => {
  const links = titulo.nextElementSibling;
  const seta = titulo.querySelector(".seta-toggle");

  titulo.addEventListener("click", (e) => {
    e.stopPropagation();

    links.classList.toggle("ativo");
    titulo.classList.toggle("ativo");
  });
});

document.addEventListener("click", () => {
  titulos.forEach((titulo) => {
    const links = titulo.nextElementSibling;
    links.classList.remove("ativo");
    titulo.classList.remove("ativo");
  });
});

// area de comprar do proprio produto __________________________________________________________________________
document.querySelectorAll(".btn-comprar").forEach(function (botao) {
  botao.addEventListener("click", function (e) {
    e.preventDefault();

    const produtoWrapper = botao.closest(".produto-wrapper");

    const nome =
      produtoWrapper.querySelector(".nome-produto")?.textContent.trim() ||
      "Produto";

    const imagem = produtoWrapper.querySelector("img")?.src || "";

    const precoTexto =
      produtoWrapper.querySelector(".preco-produto")?.textContent.trim() ||
      "R$ 0,00";
    const preco = parseFloat(precoTexto.replace("R$", "").replace(",", "."));

    const quantidadeEl = produtoWrapper.querySelector(".valor-quantidade");
    const quantidade = quantidadeEl
      ? parseInt(quantidadeEl.textContent.trim())
      : 1;

    let corSelecionada = produtoWrapper.querySelector(".btn-cor.selecionado");
    if (!corSelecionada) {
      corSelecionada = produtoWrapper.querySelector(".btn-cor");
      if (corSelecionada) corSelecionada.classList.add("selecionado");
    }

    let cor = "Não disponível";
    if (corSelecionada) {
      const classes = Array.from(corSelecionada.classList);
      cor =
        classes.find((c) => c !== "btn-cor" && c !== "selecionado") ||
        "Cor padrão";
      cor = cor.charAt(0).toUpperCase() + cor.slice(1);
    }

    let tamanhoSelecionado = produtoWrapper.querySelector(
      ".btn-tamanho.selecionado"
    );
    if (!tamanhoSelecionado) {
      tamanhoSelecionado = produtoWrapper.querySelector(".btn-tamanho");
      if (tamanhoSelecionado) tamanhoSelecionado.classList.add("selecionado");
    }
    const tamanho = tamanhoSelecionado
      ? tamanhoSelecionado.getAttribute("data-tamanho")
      : "Não disponível";

    const url = new URL("compra/index.html", document.baseURI);
    url.searchParams.set("produto", nome);
    url.searchParams.set("imagem", imagem);
    url.searchParams.set("preco", preco.toFixed(2));
    url.searchParams.set("quantidade", quantidade);
    url.searchParams.set("cor", cor);
    url.searchParams.set("tamanho", tamanho);

    window.location.href = url.toString();
  });
});

// area de compra do favorito _______________________________________________________________
document
  .getElementById("btn-finalizar")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const produtosFavoritos = [];

    document.querySelectorAll(".produto-favorito").forEach(function (produto) {
      const imagem = produto.querySelector("img").src;
      const preco =
        produto.querySelector(".preco")?.innerText.trim() || "R$ 0,00";
      const cor =
        produto
          .querySelector(".cor-favorito")
          ?.innerText.replace("Cor:", "")
          .trim() || "Cor padrão";
      const tamanho =
        produto
          .querySelector(".tamanho-favorito")
          ?.innerText.replace("Tamanho:", "")
          .trim() || "Não disponível";
      const quantidade =
        produto
          .querySelector(".quantidade-favorito")
          ?.innerText.replace("Quantidade:", "")
          .trim() || "1";

      let nome = "Produto";
      const todosProdutos = document.querySelectorAll(".produto-wrapper");
      todosProdutos.forEach(function (wrapper) {
        const img = wrapper.querySelector("img")?.getAttribute("src");
        if (img === imagem) {
          const nomeElemento = wrapper.querySelector(".nome-produto");
          if (nomeElemento) {
            nome = nomeElemento.textContent.trim();
          }
        }
      });

      produtosFavoritos.push({ imagem, preco, cor, tamanho, quantidade, nome });
    });

    localStorage.setItem("produtosCompra", JSON.stringify(produtosFavoritos));
    window.location.href = "all-compra/index.html";
  });
