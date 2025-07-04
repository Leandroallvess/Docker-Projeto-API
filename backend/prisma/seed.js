"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prismaClient_1 = require("../src/config/prismaClient");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const senhaAdmin = yield bcryptjs_1.default.hash("1234", 10);
        const senhaUser = yield bcryptjs_1.default.hash("abcd", 10);
        yield prismaClient_1.prisma.usuario.upsert({
            where: { email: "admin@teste.com" },
            update: {},
            create: {
                nome: "Admin",
                email: "admin@teste.com",
                senha: senhaAdmin,
                role: "admin",
            },
        });
        yield prismaClient_1.prisma.usuario.upsert({
            where: { email: "user@teste.com" },
            update: {},
            create: {
                nome: "Usuário Comum",
                email: "user@teste.com",
                senha: senhaUser,
                role: "user",
            },
        });
        console.log("Usuários seed criados");
    });
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prismaClient_1.prisma.$disconnect();
}));
