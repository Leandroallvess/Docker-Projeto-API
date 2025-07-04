import express from "express";
import path from "path";

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "../frontend"))); // Ajuste conforme sua pasta

import routes from "./routes";
app.use("/api", routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
