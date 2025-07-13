"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = errorHandler;
function errorHandler(err, req, res, next) {
    console.error(`[❌ Erro] ${req.method} ${req.url}`);
    console.error(err);
    const status = err.status || 500;
    const message = err.message || "Erro interno do servidor";
    const isProd = process.env.NODE_ENV === "production";
    res.status(status).json({
        sucesso: false,
        status,
        mensagem: message,
        detalhes: isProd ? null : err.details || null,
    });
}
