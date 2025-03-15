import mongoose from 'mongoose';

mongoose.pluralize(null); //to avoid pluralizing the collection name

export const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error){
        console.error(`Error: ${error.message}`);
        process.exit(1); //process code 1 is for exit with failure, 0 is for success
    }
}