import express from "express";
import path from "path";
import routes from "./routes";

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "../frontend")));
app.use("/api", routes);

export default app;
