export function listarProdutos() {
    fetch("/api/produtos")
      .then((res) => res.json())
      .then((produtos) => {
        const lista = document.getElementById("lista-produtos");
        lista.innerHTML = "";
        produtos.forEach((produto) => {
          const li = document.createElement("li");
          li.textContent = `${produto.nome} - R$ ${produto.preco}`;
          lista.appendChild(li);
        });
      })
      .catch((erro) => console.error("Erro ao listar produtos:", erro));
  }
  