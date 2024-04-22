import express from "express";
import { addMovie, getAllMovies, getMovieById, updateMovie } from "../controllers/movie-controller.js";
const movieRouter = express.Router();

movieRouter.get("/",getAllMovies);
movieRouter.get("/:id",getMovieById);
movieRouter.post("/",addMovie);
movieRouter.put("/:id",updateMovie);

export default movieRouter;