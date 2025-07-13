import express from "express";
import path from "path";
import cors from "cors";
import router from "./router";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", router);

app.use("/api/*", (req, res) => {
  res.status(404).json({ error: "Rota da API não encontrada" });
});

app.use(express.static(path.resolve(__dirname, "../../frontend")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../../frontend/index.html"));
});

export default app;
