//import
const express = require("express");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const helmet = require("helmet");
const session = require("express-session");
//import models
const Users = require("./users/users-model.js");
//import routers
const authRouter = require("./auth/auth-router.js");
const userRouter = require("./users/user-router.js");
//server
const server = express();
//session configuration
const sessionConfig = {
  name: "newSession", // default is connect.sid
  secret: "nobody tosses a dwarf!",
  cookie: {
    maxAge: 1 * 24 * 60 * 60 * 1000,
    secure: false // only set cookies over https. Server will not send back a cookie over http.
  }, // 1 day in milliseconds
  httpOnly: true, // don't let JS code access cookies. Browser extensions run JS code on your browser!
  resave: false,
  saveUninitialized: false
};
server.use(session(sessionConfig));
//general Use
server.use(express.json());
server.use(cors());
server.use(helmet());
//middleware
//routers
server.use("/api/auth", authRouter);
server.use("/api/users", userRouter);
//endpoints
//session middleware
//port and listen
const PORT = process.env.PORT || 9000;
server.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
