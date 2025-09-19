import mongoose from "mongoose"

const connectDB = async () => {
    try{
        mongoose.connect("mongodb+srv://swara011211_db_user:6n5nHWD8iYg9tdAI@cluster0.pqznnw9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("MongoDB Connected Successfully!");
    }
    catch(error){
        console.error("Error Connecting to mongoDB!", error);
    }
}