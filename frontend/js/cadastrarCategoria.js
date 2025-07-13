export function cadastrarCategoria() {
    const form = document.getElementById("form-categoria");
  
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const nome = document.getElementById("nome-categoria").value;
  
      try {
        const res = await fetch("/api/categorias", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ nome }),
        });
  
        if (!res.ok) throw new Error("Erro ao cadastrar categoria");
        alert("✅ Categoria cadastrada com sucesso!");
        form.reset();
      } catch (error) {
        console.error("Erro:", error);
        alert("❌ Falha ao cadastrar categoria");
      }
    });
  }
  