import mongoose from "mongoose";

const connectDb = async () => {
   try {
      await mongoose.connect(process.env.CONNECTION_STRING);
      console.log("Database Connected Successfully!");
   } catch (e) {
      console.log("Database connection error!");
   }
};

export { connectDb };
