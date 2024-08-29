import express from "express";
import { PORT } from "./config";
import pageRouter from "./routes/pageRouter";
import apiRouter from "./routes/apiRoutes";
import bodyparser from "body-parser";
import session from "express-session";
import { connectDB } from "./services/mongoDB";
import MongoStore from "connect-mongo";
import { Server } from "socket.io";
import http from "http";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
  const userId = socket.handshake.query.userId;

  socket.on("make-friend-suggestion", (data) => {
    const { senderId, recipientId } = data;
    socket.broadcast.emit("get-friend-suggestion", {
      recipientId,
    });
  });

  socket.on("cancel-friend-request", (data) => {
    const { senderId, recipientId } = data;
    socket.broadcast.emit("cancel-friend-request", {
      recipientId,
    });
  });

  socket.on("accept-friend-request", (data) => {
    const { senderId, recipientId } = data;
    socket.broadcast.emit("update-friends", {
      senderId,
    });
  });
});

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
  server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}
