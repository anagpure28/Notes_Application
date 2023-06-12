const express = require("express")
const {UserModel} = require("../models/user.model")
const bycrpt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config()

const userRouter = express.Router()

// Registered User
userRouter.post("/register", async(req,res)=> {
    const {name, email, pass} = req.body;
    try {
        bycrpt.hash(pass, 5, async(err, hash) => {
            if(err){
                res.json({error: err.message})
            }else{
                const user = new UserModel({name, email, pass: hash})
                await user.save()
                res.json({msg: "User registered successfully!!",user: req.body})
            }
        })
    } catch (err) {
        res.json({error: err.message})
    }
})

//Loggined User
userRouter.post("/login", async(req,res)=> {
    const {email, pass} = req.body;
    try {
        const user = await UserModel.findOne({email})
        if(user){
            bycrpt.compare(pass, user.pass, (err,result)=> {
                if(result){
                    let token = jwt.sign({userID:user._id, user:user.name}, process.env.secret)
                    res.json({msg: "Logged In Successfully!!",token})
                }else{
                    res.json({msg: "Wrong Credentials!!"})
                }
            })
        }else{
            res.json({msg: "User does not exist!"})
        }
    } catch (err) {
        res.json({error: err.message})
    }
})

module.exports = {
    userRouter
}