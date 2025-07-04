"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const client_1 = require("@prisma/client");
// Criar uma única instância do PrismaClient para toda a aplicação
exports.prisma = new client_1.PrismaClient();
