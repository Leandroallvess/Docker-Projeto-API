import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Cria categorias
  const tecnologia = await prisma.categoria.create({
    data: {
      nome: "Tecnologia",
    },
  });

  const livros = await prisma.categoria.create({
    data: {
      nome: "Livros",
    },
  });

  // Cria produtos
  await prisma.produto.createMany({
    data: [
      {
        nome: "Notebook Dell",
        preco: 4500,
        descricao: "Notebook com 16GB RAM e SSD 512GB",
        categoriaId: tecnologia.id,
      },
      {
        nome: "Livro Clean Code",
        preco: 120,
        descricao: "Livro sobre boas práticas de programação",
        categoriaId: livros.id,
      },
    ],
  });

  console.log("✅ Dados inseridos com sucesso!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
