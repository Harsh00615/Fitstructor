import express from "express";
import { isAuthenticated, login, Logout, register, sendResetOtp, sendVerifyOtp, verifyEmail, verifyResetOtp } from "../controller/authController.js";
import userAuth from "../Middleware/userAuth.js";

const authRoutes = express.Router();

authRoutes.post("/register",register);

authRoutes.post("/login",login);

authRoutes.post("/logout",Logout);

authRoutes.post("/send-verify-otp",userAuth,sendVerifyOtp);

authRoutes.post("/verify-account",userAuth,verifyEmail);

authRoutes.get("/is-auth",userAuth,isAuthenticated);

authRoutes.post("/reset-otp",sendResetOtp);

authRoutes.post("/verify-reset-otp",verifyResetOtp);

export default authRoutes;