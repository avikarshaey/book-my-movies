import { decrypt } from 'dotenv';
import jwt from 'jsonwebtoken'
import Admin from '../models/Admin.js';
import Movies from '../models/Movies.js';
import mongoose from 'mongoose';


export const addMovie = async(req, res, next)=>{
    const extractedToken = req.headers.authorization.split(" ")[1]; //Bearer Token
    if(!extractedToken && extractedToken.trim() === "") {
        return res.status(404).json({ message: "Token Not Found" });
    }

    let adminId;

    //Verification Process:
    //1. Verify - Decrypt Token
    //2. Store Admin ID From Decrypted Token

    //verify token
    jwt.verify(extractedToken, process.env.SECRET_KEY, (err, decrypted) => {
        if (err) {
            return res.status(400).json({ message: `${err.message}` });
        } else{
            adminId = decrypted.id;
            return;
        }
    });

    //create a new movie
    const { title, description, releaseDate, posterUrl, featured, actors } = req.body;
    if(!title && 
        title.trim() === "" &&
        !description && 
        description.trim() === "" &&
        !posterUrl && 
        posterUrl.trim() === ""
        ) {
            return res.status(422).json({ message: "Invalid Inputs" });
        }

        let movie;
        try{
            movie = new Movies({
                title,
                description,
                releaseDate: new Date(`${releaseDate}`),
                featured,
                actors,
                admin: adminId,
                posterUrl,
            });

            const session = await mongoose.startSession();
            const adminUser = await Admin.findById(adminId);
            session.startTransaction();
            await movie.save({ session });

            adminUser.addedMovies.push(movie);

            await adminUser.save({ session });

            await session.commitTransaction();
        } catch (err) {
            return console.log(err);
        }

        if (!movie) {
            return res.status(500).json({ message: "Request Failed" });
        }

        return res.status(201).json({ movie });

};

export const getAllMovies = async (req, res, next) => {
    let movies;

    try { 
        movies = await Movies.find();
        console.log(movies);

    } catch(err){
        return console.log(err)
    }

    if(!movies){
        return res.status(500).json({ message: 'Request Failed'})
    }
    return res.status(200).json({ movies });
}

export const getMovieById = async (req, res, next) => {
    const id = req.params.id;
    let movie;
    try{
        movie = await Movies.findById(id)
    } catch (err) {
        return console.log(err)
    }

    if (!movie) {
        return res.status(404).json({message:"Invalid Movie ID"})
    }
    return res.status(200).json({ movie })
};
export const updateMovie = async (req, res, next) => {
    const id = req.params.id;
    let movie;
    try{
        movie = await Movies.findByIdAndUpdate(id);
    } catch (err) {
        return console.log(err)
    }

    if (!movie) {
        return res.status(404).json({message:"Invalid Movie ID"})
    }
    return res.status(200).json({ movie })
};