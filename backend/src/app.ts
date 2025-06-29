import express from "express";
import routes from "./routes"; // importar suas rotas

const app = express();

app.use(express.json()); // para aceitar JSON
app.use(routes); // aqui carrega todas as rotas definidas

export default app;
