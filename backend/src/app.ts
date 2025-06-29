import express from "express";
import routes from "./routes"; // importar suas rotas
import { errorHandler } from "./middlewares/errorMiddleware";

const app = express();

app.use(express.json()); // para aceitar JSON
app.use(routes); // aqui carrega todas as rotas definidas

app.use(errorHandler);

export default app;
