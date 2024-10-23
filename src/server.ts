import express from "express";
import { PORT } from "./config";
import bodyparser from "body-parser";
import session from "express-session";
import { connectDB } from "./meetZone/services/mongoDB";
import MongoStore from "connect-mongo";
import { Server } from "socket.io";
import http from "http";
import meetZonePageRouter from "./meetZone/routes/pageRouter";
import meetZoneApiRouter from "./meetZone/routes/apiRoutes";
import portfolioPageRouter from "./portfolio/routes/pageRouter";
import portfolioApiRouter from "./portfolio/routes/apiRouter";
import plinkoPageRouter from "./plinkoGame/routes/pageRouter";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const activeUsers: string[] = [];

io.on("connection", (socket) => {
  const userId = socket.handshake.query.userId! as string;
  activeUsers.push(userId);

  io.emit("update-active-users", activeUsers);

  socket.on("disconnect", () => {
    const index = activeUsers.indexOf(userId);
    activeUsers.splice(index, 1);

    io.emit("update-active-users", activeUsers);
  });

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
      senderId,
    });
  });

  socket.on("accept-friend-request", (data) => {
    const { senderId, recipientId } = data;
    socket.broadcast.emit("update-friends", {
      senderId,
      recipientId,
    });
  });

  socket.on("remove-friend", (data) => {
    const { userId, friendId } = data;
    socket.broadcast.emit("someone-remove-friend", {
      userId,
      friendId,
    });
  });

  socket.on("update-messages", (data) => {
    const { userId, friendId } = data;
    socket.broadcast.emit("update-messages", {
      userId,
      friendId,
    });
  });

  socket.on("update-posts", () => {
    socket.broadcast.emit("update-posts");
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

app.use(meetZonePageRouter);
app.use(meetZoneApiRouter);
app.use(portfolioPageRouter);
app.use(portfolioApiRouter);
app.use(plinkoPageRouter);

export function startServer() {
  server.listen(PORT, () => {
    console.log(`Server is running on http://localhost/:${PORT}`);
  });
}
