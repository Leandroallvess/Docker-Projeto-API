export async function listarCategorias() {
    try {
      const res = await fetch("/api/categorias");
      const categorias = await res.json();
  
      const lista = document.getElementById("lista-categorias");
      const select = document.getElementById("categoria-produto");
      lista.innerHTML = "";
      select.innerHTML = "";
  
      categorias.forEach((cat) => {
        const li = document.createElement("li");
        li.textContent = cat.nome;
        lista.appendChild(li);
  
        const option = document.createElement("option");
        option.value = cat.id;
        option.textContent = cat.nome;
        select.appendChild(option);
      });
    } catch (error) {
      console.error("Erro ao listar categorias:", error);
    }
  }
  