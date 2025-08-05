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
  { nome: "conjunto stitch", link: "#", imagem: "img/stitch 1.jpg" },
  { nome: "conjunto trolls", link: "#", imagem: "img/trolls 2.jpg" },
  { nome: "conjunto lol", link: "#", imagem: "img/saia lol 2.jpg" },
  { nome: "conjunto realeza", link: "#", imagem: "img/realeza 4.jpg" },
  { nome: "conjunto peppa", link: "#", imagem: "img/peppa 1.jpg" },
  { nome: "conjunto minnie", link: "#", imagem: "img/minnie rosa 1.jpg" },
  { nome: "conjunto chefinha", link: "#", imagem: "img/chefinha 3.jpg" },
  {
    nome: "conjunto bolofofos-rosa",
    link: "#",
    imagem: "img/bolofofos rosa 1.jpg",
  },
  { nome: "conjunto monstro", link: "#", imagem: "img/monstro sa 2.jpg" },
  { nome: "conjunto moana", link: "#", imagem: "img/moana 1.jpg" },
  { nome: "conjunto maria", link: "#", imagem: "img/maria clara 1.jpg" },
  { nome: "conjunto magali", link: "#", imagem: "img/magali 1.jpg" },
  { nome: "conjunto luna", link: "#", imagem: "img/luna 2.jpg" },
  {
    nome: "conjunto bolofofos-lilas",
    link: "#",
    imagem: "img/bolofofos lilas 3.jpg",
  },
  { nome: "conjunto bela", link: "#", imagem: "img/bela e a fera 2.jpg" },
  { nome: "conjunto ariel", link: "#", imagem: "img/ariel 1.jpg" },
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
        .map((produto) => {
          const nomeProduto = produto.nome;
          const regex = new RegExp(`(${termo})`, "gi");
          const nomeComDestaque = nomeProduto.replace(regex, `<span>$1</span>`);

          return `
            <div>
              <img src="${produto.imagem}" alt="${produto.nome}" />
              <a href="${produto.link}">${nomeComDestaque}</a>
            </div>
          `;
        })
        .join("")}
    </div>
  `;
}
