import asyncHandler from "express-async-handler";
import { User } from "../models/userModel.js";

const userRegister = asyncHandler(async (req, res) => {
   const {
      full_name,
      email,
      password,
      batch,
      faculty,
      member_type,
      mobile_no,
      registration_no,
      gender,
   } = req.body;
   if (!email || !password || !mobile_no) {
      res.status(400);
      throw new Error("All fields are required!");
   }
   const userEmailCheck = await User.findOne({ email: email }).exec();
   if (userEmailCheck) {
      res.status(400);
      throw new Error("User already exist with given email!");
   }
   const user = await User.create({
      full_name,
      email,
      password,
      batch,
      faculty,
      member_type,
      mobile_no,
      registration_no,
      gender,
   });
   console.log(user);
   if (user) {
      res.status(201).json({
         u_id: user._id,
         full_name: user.full_name,
         email: user.email,
         mobile_no: user.mobile_no,
         registration_no: user.registration_no ? user.registration_no : "-",
      });
   } else {
      res.status(400);
      throw new Error("Something went wrong!");
   }
});

const userLogin = asyncHandler(async (req, res) => {
   const { email, password } = req.body;
   const existUser = await User.findOne({ email: email }).exec();

   if (!existUser) {
      res.status(400);
      throw new Error("User doesn't exist with given email!");
   } else {
      if (existUser.password === password) {
         const accessToken = "some-valid-token";
         res.status(200).json({ accessToken, existUser });
      } else {
         res.status(400);
         throw new Error("Password is incorrect!");
      }
   }
});

export { userRegister, userLogin };
