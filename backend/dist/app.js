"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const router_1 = __importDefault(require("./router"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api", router_1.default);
app.use("/api/*", (req, res) => {
    res.status(404).json({ error: "Rota da API não encontrada" });
});
app.use(express_1.default.static(path_1.default.resolve(__dirname, "../../frontend")));
app.get("*", (req, res) => {
    res.sendFile(path_1.default.resolve(__dirname, "../../frontend/index.html"));
});
exports.default = app;
