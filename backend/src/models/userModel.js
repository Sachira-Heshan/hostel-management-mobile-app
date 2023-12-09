import mongoose from "mongoose";

const userSchema = mongoose.Schema(
   {
      full_name: {
         type: String,
         required: [true, "Name is required!"],
      },
      email: {
         type: String,
         required: [true, "Email is required!"],
         unique: [true, "Email already registered!"],
      },
      password: {
         type: String,
         required: [true, "Password is required!"],
      },
      batch: {
         type: String,
      },
      faculty: {
         type: String,
      },
      member_type: {
         type: String,
         required: [true, "Member type is required!"],
         default: "student",
      },
      mobile_no: {
         type: String,
         required: [true, "Mobile no is required!"],
      },
      registration_no: {
         type: String,
      },
      gender: {
         type: String,
         required: [true, "Gender is required!"],
      },
   },
   {
      timestamps: true,
   }
);

const User = mongoose.model("User", userSchema, "users");

export { User };
