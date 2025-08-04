import express from 'express'
import { register, signin } from "../controllers/authController.js";

const authRoutes  = express.Router()

authRoutes.post('/register',register)
authRoutes.post('/login',signin)

export default authRoutes