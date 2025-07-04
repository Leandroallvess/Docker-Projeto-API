"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DadosController = void 0;
class DadosController {
    static getDados(req, res) {
        res.json({
            mensagem: "Mensagem gerada pela API via controller, teste do backend",
        });
    }
}
exports.DadosController = DadosController;
