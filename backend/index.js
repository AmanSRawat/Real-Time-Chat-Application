import express from 'express'
import dotenv from 'dotenv'
import connectDB from './db/connection.js'
import authRoutes from './routes/authRoutes.js'
import messageRoutes from './routes/messageRoutes.js'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 8000;

app.use(express.json())
// app.use(express.urlencoded({extended: false}))

app.use('/api',authRoutes)

app.use('/api',messageRoutes)


app.listen(PORT, ()=>{
    connectDB()
    console.log(`Server is running on PORT http://localhost:${PORT}`);
})