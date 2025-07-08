import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import connectDB from "./config/MongoDb.js";
import authRouter from "./Routes/AuthRoutes.js";
import userRouter from "./Routes/userRoutes.js";

const app = express();
const port = process.env.PORT  || 4000 ; 

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const allowedOrigins = ['http://localhost:3000']
app.use(cors({origin : allowedOrigins ,credentials : true}));

// API ENDPOINTS.

app.get("/",(req,res) => {
    res.send("API working");
})

app.use('/api/auth',authRouter);
app.use('/api/user',userRouter);

app.listen(port,()=> {console.log(`Listening on the Port ${port}`)});