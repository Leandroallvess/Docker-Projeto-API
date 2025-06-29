import { PrismaClient } from "@prisma/client";

// Criar uma única instância do PrismaClient para toda a aplicação
export const prisma = new PrismaClient();
