"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = errorHandler;
function errorHandler(err, req, res, next) {
    console.error(`[❌ Erro] ${req.method} ${req.url}`);
    console.error(err);
    const status = err.status || 500;
    const message = err.message || "Erro interno do servidor";
    res.status(status).json({
        sucesso: false,
        status,
        mensagem: message,
        detalhes: (err === null || err === void 0 ? void 0 : err.details) || null, // útil para mensagens do Joi, por exemplo
    });
}
