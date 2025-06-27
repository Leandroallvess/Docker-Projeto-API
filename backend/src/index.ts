import express from "express";
import routes from "./routes";

const app = express();

app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 3000;

routes.get("/", (req, res) => {
  res.send("Seja bem-vindo à API de produtos!");
});
