import express, { urlencoded } from "express";
import cors from "cors";
import { PORT } from "./config";
import pageRouter from "./routes/pageRouter";
import apiRouter from "./routes/apiRoutes";
import cookieParser from "cookie-parser";
import session from "express-session";

const app = express();

// Config
app.set("view engine", "ejs");
app.set("views", "src/views");
app.use(cors());
app.use(cookieParser());

app.use(express.static("static"));
app.use(urlencoded({ extended: true }));
// app.use(
//   session({
//     secret: "my secret key",
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: false, maxAge: 1000 * 60 * 60 * 24 },
//   })
// );

// app.use(pageRouter);
// app.use(apiRouter);

let username = "";

type User = {
  username: string;
  password: string;
  age: number;
  address: string;
};

type SessionType = {
  id: number;
  username: string;
};

let users: Array<User> = [];

var sessions: Array<SessionType> = [];

app.get("/homepage", (req, res) => {
  const sessionId = req.cookies.sessionId;

  console.log("SESSION ID : ", sessionId);
  if (!sessionId) {
    res.redirect("/reg");
  }

  if (checkIfAuthenticated(sessionId)) {
    res.send("Hello " + req.cookies.username);
  } else {
    res.redirect("/reg");
  }
});

function checkIfAuthenticated(sessionId: number) {
  let session = sessions.find((session) => {
    console.log("Checking SESSION ID:", session.id);
    console.log(Number(session.id));
    if (Number(session.id) === sessionId) {
      console.log("Session ID is equal to session ID");
    }
    return Number(session.id) === sessionId; // Check if the session ID matches
  });

  console.log("SESSION:", session);

  if (session) {
    console.log("Session found:", session);
    return true; // Session exists
  } else {
    console.log("Session not found");
    return false; // Session does not exist
  }
}

app.get("/reg/:username/:password", (req, res) => {
  const username = req.params.username;
  const password = req.params.password;

  const user = users.filter((user) => user.username === username);
  if (user.length > 0) {
    res.send("User already exists");
    return;
  }

  registerNewUser(username, password);
  createSession(username);

  res.cookie("sessionId", sessions.length - 1);
  res.send("Hello " + req.params.username);
});

function createSession(username: string) {
  const session = {
    id: sessions.length,
    username,
  };

  sessions.push(session);
  console.log("SESSION  IS : ", sessions);
}

function registerNewUser(username: string, password: string) {
  const user = {
    username,
    password,
    age: 0,
    address: "Tbilisi",
  };
  users.push(user);
}

export function startServer() {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}
