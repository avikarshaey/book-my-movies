import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user-routes.js";
import adminRouter from "./routes/admin-routes.js";
import movieRouter from "./routes/movie-routes.js";
import bookingsRouter from "./routes/booking-routes.js";
dotenv.config();
const app = express();

// app.use("/",(req,res,next)=>{
//     res.send("<h1>Namaskar</h1>");
// })

//middlewares
app.use(express.json());
app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/movie", movieRouter);
app.use("/booking", bookingsRouter);

mongoose.connect(`mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.aberpm1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`).then(()=>
app.listen(5000,()=>
console.log("Connected to Database And Server is Running"))).catch((e)=>console.log(e));



// console.log('Mitron!!');

// UserName : admin
// Password : 2mje7gh66m44I1qS

// Connection String : mongodb+srv://admin:<password>@cluster0.aberpm1.mongodb.net/