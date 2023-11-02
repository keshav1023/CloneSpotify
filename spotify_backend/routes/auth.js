const express = require("express");
const router = express.Router();
const User = require("../models/Users");
const bcrypt = require("bcrypt");
const {getToken} =require("../utils/helper")

// this POST route will help in registering a user
router.post("/register",async (req,res) =>{
    // runs when /register api is called
    const {email,password,firstName,lastName,username} = req.body;

    // Does a user with this email already exists
    const user = await User.findOne({email: email});
    if(user){
        return res
        .status(403)
        .json({error : "A user with this email already exists"});
    }
    //if doesnot exist , create a new user.
    // we convert plain text password to a hash.

    const hashedPassword = bcrypt.hash(password,10);
    const newUserData = {
        email,
        password: hashedPassword,
        firstName,
        lastName,
        username,
    };
    const newUser=await User.create(newUserData);

    //We want to create the token to return to user.
    const token = await getToken(email,newUser);
    
    // Return to user

    const userToReturn = { ...newUser.toJSON(), token};
    delete userToReturn.password;
    return res.status(200).json(userToReturn);

});