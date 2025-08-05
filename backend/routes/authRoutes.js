import express from 'express'
import { getAllUsers, register, signin } from "../controllers/authController.js";

const authRoutes  = express.Router()

authRoutes.post('/register',register)
authRoutes.post('/login',signin)
authRoutes.get('/users',getAllUsers)

export default authRoutes