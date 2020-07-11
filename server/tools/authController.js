const User=require("../models/User");
const asyncHandler=require("express-async-handler");
const {sendJwtToClient}=require("../needs/token");

const register=asyncHandler(async (req,res)=>{

    const {name,email,password}=req.body;

    const user=await User.create({
        name,email,password
    });
    sendJwtToClient(user,res)
});

const login=asyncHandler(async (req,res)=>{
    const{email,password}=req.body;
    const user=await User.findOne({email}).select("+password");
    if(password===user.password){
        sendJwtToClient(user,res)
    }
    else{
        console.log("Giriş Başarısız")
    }


});

module.exports={register,login};
