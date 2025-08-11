document.addEventListener("DOMContentLoaded", function () {
  const produtos = JSON.parse(localStorage.getItem("favoritos")) || [];

  console.log("Produtos carregados:", produtos); // Teste
  // ... renderização dos produtos
});

// Renderizar produtos na tela
const listaProdutos = document.getElementById("lista-produtos");
let total = 0;

produtos.forEach((produto) => {
  const subtotal = produto.preco * produto.quantidade;
  total += subtotal;

  const itemHTML = `
    <div class="produto-item produto-finalizar">
      <div class="produto-info">
        <img src="${produto.imagem}" alt="${produto.nome}">
        <div class="produto-detalhes">
          <p class="nome-produto"><strong>${produto.nome}</strong></p>
          <p class="cor-produto">Cor: ${produto.cor}</p>
          <p class="tamanho-produto">Tamanho: ${produto.tamanho}</p>
          <p class="quantidade-produto">Quantidade: ${produto.quantidade}</p>
        </div>
      </div>
      <div class="produto-preco preco-produto">
        R$ ${produto.preco.toFixed(2).replace(".", ",")}
      </div>
    </div>
  `;
  listaProdutos.innerHTML += itemHTML;
});

document.getElementById("total-compra").textContent = total
  .toFixed(2)
  .replace(".", ",");

// Enviar para WhatsApp
function enviarParaWhatsApp() {
  const numeroWhatsApp = "5599999999999"; // Coloque seu número

  let mensagem = "🛒 Olá! Desejo comprar os seguintes produtos:%0A%0A";

  produtos.forEach((produto) => {
    mensagem += `📦 *Produto*: ${produto.nome}%0A🎨 *Cor*: ${
      produto.cor
    }%0A📏 *Tamanho*: ${produto.tamanho}%0A🔢 *Quantidade*: ${
      produto.quantidade
    }%0A💲 *Preço unitário*: R$ ${produto.preco
      .toFixed(2)
      .replace(".", ",")}%0A-------------------------%0A`;
  });

  mensagem += `%0A💰 *Total da compra*: R$ ${total
    .toFixed(2)
    .replace(".", ",")}`;

  const url = `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;
  window.open(url, "_blank");
}
