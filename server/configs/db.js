import mongoose from "mongoose";

const connectDB = async () => {
    try{
        mongoose.connection.on('connected', ()=> console.log('Database connected'))
        await mongoose.connect(`mongodb+srv://harry:harry123@cluster0.macjheo.mongodb.net`)
    } catch (error){
        console.log(error.message)
    }
}

export default connectDB