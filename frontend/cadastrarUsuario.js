console.log('Script carregado com sucesso');

document.getElementById('form-cadastro').addEventListener('submit', async (e) => {
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  console.log('Enviando cadastro:', { nome, email, senha });

  try {
    const resposta = await fetch('http://localhost:3000/api/usuarios/cadastrar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome, email, senha })
    });

    const resultado = await resposta.json();

    const mensagem = document.getElementById('mensagem');
    console.log('Status da resposta:', resposta.status);
    console.log('Resposta JSON:', resultado);

    if (resposta.ok) {
      mensagem.innerText = `✅ ${resultado.mensagem}`;
      mensagem.className = 'sucesso';

      //limpar a mensagem depois de 4 segundos automaticamente,
      setTimeout(() => {
        mensagem.innerText = "";
        mensagem.className = "";
      }, 4000);
      

    } else {
      mensagem.innerText = `⚠️ ${resultado.mensagem || resultado.error || resultado.message}`;
      mensagem.className = 'erro';

      setTimeout(() => {
        mensagem.innerText = "";
        mensagem.className = "";
      }, 4000);      

    }
  } catch (erro) {
    console.error('Erro no fetch:', erro);
    const mensagem = document.getElementById('mensagem');
    mensagem.innerText = 'Erro ao cadastrar usuário.';
    mensagem.style.color = 'red';
  }
});
