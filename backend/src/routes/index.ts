import { Router } from "express";
import { UsuarioController } from "../controllers/usuarioController";

const router = Router();

// Rotas de usuário diretamente aqui:

router.get("/usuarios", UsuarioController.listar); // Listar usuários
router.post("/usuarios/cadastrar", UsuarioController.cadastrar); // Cadastrar usuário
router.post("/usuarios/login", UsuarioController.login); // Login usuário

// Outras rotas podem ser adicionadas aqui, usando os controllers correspondentes

export default router;
