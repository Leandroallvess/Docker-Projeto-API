export function cadastrarProduto() {
    const form = document.getElementById("form-produto");
  
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const nome = document.getElementById("nome-produto").value;
      const preco = Number(document.getElementById("preco-produto").value);
      const categoriaId = Number(document.getElementById("categoria-produto").value);
  
      try {
        const res = await fetch("/api/produtos", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ nome, preco, categoriaId }),
        });
  
        if (!res.ok) throw new Error("Erro ao cadastrar produto");
        alert("✅ Produto cadastrado com sucesso!");
        form.reset();
      } catch (error) {
        console.error("Erro:", error);
        alert("❌ Falha ao cadastrar produto");
      }
    });
  }
  