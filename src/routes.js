const express = require("express").Router();
const routes = express;
const authMiddleware = require("./app/middleware/auth");

const UserController = require("./app/controllers/UserController");
const SessionController = require("./app/controllers/SessionController");

routes.post("/users", UserController.store);

routes.post("/sessions", SessionController.store);

routes.use(authMiddleware);
routes.get("/dashboard", (req, res) => {
  res.status(200).send();
});

module.exports = routes;
