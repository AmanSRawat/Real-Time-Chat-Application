import mongoose from "mongoose"

const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER_URL}/?retryWrites=true&w=majority&appName=${process.env.MONGODB_DB_NAME}`;

const connectDB = async ()=>{
    try {
        const conn =  await mongoose.connect(process.env.MONGODB_URI)
        console.log('Mongo DB connected successfully!')
    } catch (error) {
        console.error(`Error: ${error}`)
         process.exit(1)
    }
}

export default connectDB