const express = require("express");
const moviesRouter = express.Router();
const {
  readMovie,
  readMovieById,
  createMovie,
  updatemovie,
  deletemovie,
} = require("../controllers/moviesControllers.js");
const authJWT = require("../middleware/auth.js");

moviesRouter.get("/movie", readMovie);
moviesRouter.get("/movie/:id", readMovieById);

moviesRouter.post("/movie", createMovie);
moviesRouter.put("/movie/:id", updatemovie);

moviesRouter.delete("/movie/:id", deletemovie);

module.exports = moviesRouter;
