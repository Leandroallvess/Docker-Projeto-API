import { Router } from "express";
import { UsuarioController } from "../controllers/usuarioController";

console.log("🚦 Rotas carregadas");

const router = Router();

router.get("/usuarios/listar", UsuarioController.listar);
router.post("/usuarios/cadastrar", UsuarioController.cadastrar);
router.post("/usuarios/login", UsuarioController.login);

export default router;
