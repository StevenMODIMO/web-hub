import dotenv from "dotenv";
import express from "express";
import path from "path";
import { getClient, query } from "./lib/db";
import crudRoutes from "./routes/crudRoutes"

dotenv.config();

const PORT = process.env.PORT;
const app = express();

getClient();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use((req, res, next) => {
  console.log(res.statusCode, req.method, req.path);
  next();
});

app.use("/cruds", crudRoutes)

app.get("/", async (req, res) => {
  res.status(200).render("index");
});

app.get("/test-favicon", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "assets", "favicon.png"));
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
