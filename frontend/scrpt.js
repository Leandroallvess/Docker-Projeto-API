const loginDiv = document.getElementById("login");
const dashboardDiv = document.getElementById("dashboard");
const mensagemP = document.getElementById("mensagem");
const msgErroP = document.getElementById("msgErro");
const listaCategorias = document.getElementById("listaCategorias");
const usuariosCadastradosP = document.getElementById("usuariosCadastrados");

function exibirDashboard() {
  loginDiv.style.display = "none";
  dashboardDiv.style.display = "block";
  mensagemP.textContent = "";
  carregarCategorias();
  carregarUsuarios(); // 🔥 nova função para exibir usuários
}

function exibirLogin() {
  loginDiv.style.display = "block";
  dashboardDiv.style.display = "none";
  mensagemP.textContent = "";
  msgErroP.textContent = "";
  listaCategorias.innerHTML = "";
  usuariosCadastradosP.textContent = ""; // limpa o parágrafo de usuários
}

async function carregarCategorias() {
  const token = localStorage.getItem("token");
  if (!token) {
    exibirLogin();
    return;
  }

  try {
    const res = await fetch("/api/categorias", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    if (!res.ok) {
      throw new Error("Erro: " + res.status);
    }
    const categorias = await res.json();
    listaCategorias.innerHTML = categorias
      .map((cat) => `<li>${cat.nome}</li>`)
      .join("");
    msgErroP.textContent = "";
  } catch (err) {
    msgErroP.textContent = "Erro ao carregar categorias: " + err.message;
    if (err.message.includes("401") || err.message.includes("403")) {
      localStorage.removeItem("token");
      exibirLogin();
    }
  }
}

async function carregarUsuarios() {
  const token = localStorage.getItem("token");
  if (!token) return;

  try {
    const res = await fetch("/api/usuarios", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    if (!res.ok) throw new Error("Erro: " + res.status);

    const usuarios = await res.json();
    const nomes = usuarios.map((u) => u.nome).join(", ");
    usuariosCadastradosP.textContent = "👥 Usuários cadastrados: " + nomes;
  } catch (err) {
    usuariosCadastradosP.textContent = "Erro ao carregar usuários";
  }
}

document.getElementById("formLogin").addEventListener("submit", async (e) => {
  e.preventDefault(); // Previne recarregamento da página

  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value;

  if (!email || !senha) {
    mensagemP.textContent = "Preencha email e senha!";
    return;
  }

  try {
    const res = await fetch("/api/usuarios/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, senha }),
    });

    const data = await res.json();

    if (!res.ok) {
      mensagemP.textContent = data.mensagem || "Erro no login";
      return;
    }

    localStorage.setItem("token", data.token);
    exibirDashboard();
  } catch {
    mensagemP.textContent = "Erro na conexão";
  }
});

document.getElementById("btnLogout").addEventListener("click", () => {
  localStorage.removeItem("token");
  exibirLogin();
});

// Ao carregar a página, verifica se o token está salvo
if (localStorage.getItem("token")) {
  exibirDashboard();
} else {
  exibirLogin();
}
