async function fetchProdutos() {
  const lista = document.getElementById("lista-produtos")!;
  lista.innerHTML = "🔄 Carregando...";

  try {
    const response = await fetch("http://api:3000/produtos");
    if (!response.ok) throw new Error("Erro ao buscar produtos");
    const produtos = await response.json();

    if (!Array.isArray(produtos) || produtos.length === 0) {
      lista.innerHTML = "⚠️ Nenhum produto encontrado.";
      return;
    }

    lista.innerHTML = produtos
      .map(
        (prod) => `
      <div class="produto">
        <strong>${prod.nome}</strong><br>
        Preço: R$ ${prod.preco.toFixed(2)}
      </div>
    `
      )
      .join("");
  } catch (error) {
    lista.innerHTML = "❌ Erro ao carregar produtos.";
  }
}

fetchProdutos();
