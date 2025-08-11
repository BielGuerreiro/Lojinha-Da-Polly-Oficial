function getParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    nome: params.get("produto") || "Produto",
    cor: params.get("cor") || "Não informado",
    tamanho: params.get("tamanho") || "Não informado",
    quantidade: parseInt(params.get("quantidade")) || 1,
    preco: parseFloat(params.get("preco")) || 0,
    imagem: params.get("imagem") || "",
  };
}

const dados = getParams();

document.getElementById("produto-img").src = dados.imagem;
document.getElementById("produto-nome").textContent = dados.nome;
document.getElementById("produto-cor").textContent = dados.cor;
document.getElementById("produto-tamanho").textContent = dados.tamanho;
document.getElementById("produto-quantidade").textContent = dados.quantidade;
document.getElementById("produto-preco").textContent = dados.preco
  .toFixed(2)
  .replace(".", ",");
document.getElementById("produto-total").textContent = (
  dados.preco * dados.quantidade
)
  .toFixed(2)
  .replace(".", ",");

// whats ____________________________________________________________________
document.querySelector(".btn-finalizar").addEventListener("click", function () {
  // Pegando os dados já carregados na página
  const nome = document.getElementById("produto-nome").textContent;
  const preco = document.getElementById("produto-preco").textContent;
  const cor = document.getElementById("produto-cor").textContent;
  const tamanho = document.getElementById("produto-tamanho").textContent;
  const quantidade = document.getElementById("produto-quantidade").textContent;
  const imagem = document.getElementById("produto-img").src;

  // Texto para enviar
  const mensagem = `Olá! 👋 Desejo comprar este produto:

🛍 Produto: ${nome}
💲 Preço: R$ ${preco}
🎨 Cor: ${cor}
📏 Tamanho: ${tamanho}
🔢 Quantidade: ${quantidade}
`;

  const numeroWhatsApp = "5511983830590";

  const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
    mensagem
  )}`;

  // Abrir no WhatsApp
  window.open(url, "_blank");
});
