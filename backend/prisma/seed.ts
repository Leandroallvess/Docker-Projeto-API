import { prisma } from "../src/config/prismaClient";
import bcrypt from "bcryptjs";

async function main() {
  const senhaAdmin = await bcrypt.hash("1234", 10);
  const senhaUser = await bcrypt.hash("abcd", 10);
  const adminSenha = await bcrypt.hash("1234", 10);

  await prisma.usuario.upsert({
    where: { email: "admin@teste.com" },
    update: {},
    create: {
      nome: "Admin",
      email: "admin@teste.com",
      senha: senhaAdmin,
      role: "admin",
    },
  });
  await prisma.usuario.upsert({
    where: { email: "leandroaallvess@gmail.com" },
    update: {},
    create: {
      nome: "Leandro Alves",
      email: "leandroaallvess@gmail.com",
      senha: adminSenha,
      role: "admin",
    },
  });

  await prisma.usuario.upsert({
    where: { email: "user@teste.com" },
    update: {},
    create: {
      nome: "Usuário Comum",
      email: "user@teste.com",
      senha: senhaUser,
      role: "user",
    },
  });

  console.log("Usuarios seed criados");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
