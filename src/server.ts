import express from "express";
import { PORT } from "./config";
import pageRouter from "./routes/pageRouter";
import apiRouter from "./routes/apiRoutes";
import bodyparser from "body-parser";
import session from "express-session";
import { connectDB } from "./services/mongoDB";
import MongoStore from "connect-mongo";

const app = express();

// Connect to the database
connectDB();

app.use(
  session({
    secret: "my-secret",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({
      mongoUrl: process.env.MONGODB_URI!,
      collectionName: "sessions",
    }),
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

// Config
app.set("view engine", "ejs");
app.set("views", "public");

app.use(express.static("public"));
app.use(bodyparser.json());

app.use(pageRouter);
app.use(apiRouter);

export function startServer() {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}
