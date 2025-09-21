import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(
            process.env.MONGO_URI, 
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );
        console.log("✅ MongoDB Connected Successfully!");
    } catch (error) {
        console.error("❌ Error Connecting to MongoDB!", error.message);
        process.exit(1); // exit process if DB fails
    }
};

export default connectDB;
