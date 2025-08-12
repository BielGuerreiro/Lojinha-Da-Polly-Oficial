document.addEventListener("DOMContentLoaded", function () {
  const produtos = JSON.parse(localStorage.getItem("produtosCompra")) || [];

  const listaProdutos = document.getElementById("lista-produtos");
  let total = 0;

  produtos.forEach((produto) => {
    const precoNum =
      parseFloat(produto.preco.replace("R$", "").replace(",", ".").trim()) || 0;
    const qtdNum = parseInt(produto.quantidade) || 1;
    const subtotal = precoNum * qtdNum;
    total += subtotal;

    const itemHTML = `
    <div class="produto-item produto-finalizar">
      <div class="produto-info">
        <img src="${produto.imagem}" alt="${produto.nome || "Produto"}">
        <div class="produto-detalhes">
          <p class="nome-produto"><strong>Produto:</strong> ${
            produto.nome || "Produto sem nome"
          }</p>
          <p class="cor-produto"><strong>Cor:</strong> ${produto.cor}</p>
          <p class="tamanho-produto"><strong>Tamanho:</strong> ${
            produto.tamanho
          }</p>
          <p class="quantidade-produto"><strong>Quantidade:</strong> ${
            produto.quantidade
          }</p>
        </div>
      </div>
      <div class="produto-preco preco-produto">
        <strong>Preço unitário:</strong> R$ ${precoNum
          .toFixed(2)
          .replace(".", ",")}
      </div>
    </div>
  `;
    listaProdutos.innerHTML += itemHTML;
  });

  // Corrigindo para o ID certo
  document.getElementById("preco-total").textContent = `R$ ${total
    .toFixed(2)
    .replace(".", ",")}`;
});

// area do whatassap ________________________________________________
function enviarParaWhatsApp() {
  const produtos = JSON.parse(localStorage.getItem("produtosCompra")) || [];
  const numeroWhatsApp = "5599999999999";

  let mensagem = "🛒 Olá! Desejo comprar os seguintes produtos:%0A%0A";

  produtos.forEach((produto) => {
    mensagem += `📦 *Produto*: ${produto.nome}%0A🎨 *Cor*: ${produto.cor}%0A📏 *Tamanho*: ${produto.tamanho}%0A🔢 *Quantidade*: ${produto.quantidade}%0A💲 *Preço unitário*: ${produto.preco}%0A-------------------------%0A`;
  });

  const total = document.getElementById("preco-total").textContent;
  mensagem += `%0A💰 *Total da compra*: ${total}`;

  const url = `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;
  window.open(url, "_blank");
}
