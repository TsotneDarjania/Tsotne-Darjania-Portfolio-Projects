import express from "express";
import { PORT } from "./config";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export function startServer() {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}