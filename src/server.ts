import express from "express";
import cors from "cors";
import { PORT } from "./config";
import pageRouter from "./routes/pageRouter";

const app = express();

// Config
app.set("view engine", "ejs");
app.set("views", "src/views");
app.use(cors());

app.use(express.static("static"));

app.get("/", pageRouter);

export function startServer() {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}
