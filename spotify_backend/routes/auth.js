const express = require("express");
const router = express.Router();
const User = require("../models/Users");
const bcrypt = require("bcrypt");
const {getToken} =require("../utils/helper")

// this POST route will help in registering a user
router.post("/register",async (req,res) =>{
    // runs when /register api is called
    const {email,password,firstName,lastName,userName} = req.body;

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
        userName,
    };
    const newUser=await User.create(newUserData);

    //We want to create the token to return to user.
    const token = await getToken(email,newUser);
    
    // Return to user

    const userToReturn = { ...newUser.toJSON(), token};
    delete userToReturn.password;
    return res.status(200).json(userToReturn);

});

router.post("/login", async (req,res) => {
    // Get email and password sent by user from req.body.
    const {email,pasword} = req.body;
    
    // Check if user exists , else invalid credentials.
    const user= await User.findOne({email:email});
    if(!user){
        return res
        .status(403)
        .json({err: "Invalid credentials !!!"});
    }

    // If user exists check if the password is correct, if not invalid credentials.
    const isPasswordValid = await bcrypt.compare(password,user.password);
    if(!isPasswordValid){
        return res
        .status(403)
        .json({err: "Invalid credentials !!!"});
    }

    // If credentials are correct return a token to the user 
    const token = await getToken(user.email, user);

    // Return to user
    const userToReturn = { ...user.toJSON(), token};
    delete userToReturn.password;
    return res.status(200).json(userToReturn);


});

module.exports = router;