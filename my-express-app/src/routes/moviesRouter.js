const express = require("express")
const moviesRouter = express.Router()
const {getMovie} = require ("../controllers/moviesControllers.js")
const {getMovieById} = require ("../controllers/moviesControllers.js")
const {loggerMiddleware} = require ("../controllers/moviesControllers.js")
const {tokenMiddleware} = require ("../controllers/moviesControllers.js")
const {yearMiddleware} = require ("../controllers/moviesControllers.js")
const {timeMiddleware} = require ("../controllers/moviesControllers.js")
const {checkIdMoviesMiddleware} = require ("../controllers/moviesControllers.js")
const {getMovieApi} = require ("../controllers/moviesControllers.js")
const {getMovieByIdApi} = require ("../controllers/moviesControllers.js")



moviesRouter.get('/movies', loggerMiddleware, tokenMiddleware, yearMiddleware, getMovieApi)
moviesRouter.get('/movies/:id',loggerMiddleware, checkIdMoviesMiddleware, getMovieByIdApi )
module.exports = {moviesRouter}