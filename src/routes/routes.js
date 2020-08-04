const express = require('express');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const route = express.Router();

route.get('/',(req,res)=>{
    res.send("Hello everyone!")
})

route.post('/signup',async (req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    try{
    const user = new User({email:email,password:password});
    await user.save();
    return res.send("Account Created")
    }catch(err){
        return res.send(err);
    }

})

route.post('/signin',async (req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    try{
    const user = await User.findOne({email});
    if(user.password === password) return res.send("Logged IN Successfully")
    else return res.send("Invalid credentials");
    }catch{
        return res.send("Create an account and then try logging in");
    }


})

module.exports = route;