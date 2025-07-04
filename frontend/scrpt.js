const loginDiv = document.getElementById("login");
const dashboardDiv = document.getElementById("dashboard");
const mensagemP = document.getElementById("mensagem");
const msgErroP = document.getElementById("msgErro");
const listaCategorias = document.getElementById("listaCategorias");

function exibirDashboard() {
  loginDiv.style.display = "none";
  dashboardDiv.style.display = "block";
  mensagemP.textContent = "";
  carregarCategorias();
}

function exibirLogin() {
  loginDiv.style.display = "block";
  dashboardDiv.style.display = "none";
  mensagemP.textContent = "";
  msgErroP.textContent = "";
  listaCategorias.innerHTML = "";
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

document.getElementById("btnLogin").addEventListener("click", async () => {
  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value;

  if (!email || !senha) {
    mensagemP.textContent = "Preencha email e senha!";
    return;
  }

  try {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, senha }),
    });

    if (!res.ok) {
      const data = await res.json();
      mensagemP.textContent = data.mensagem || "Erro no login";
      return;
    }

    const data = await res.json();
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

// Verifica se há token salvo ao carregar a página
if (localStorage.getItem("token")) {
  exibirDashboard();
}
