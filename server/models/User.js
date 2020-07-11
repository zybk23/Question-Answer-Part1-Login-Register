const mongoose=require("mongoose");
const jwt=require("jsonwebtoken");



const Schema=mongoose.Schema;

const UserSchema=new Schema({
    name:{
        type:String,
        required:[true,"Please provide a name"]
    },
    email:{
        type:String,
        required:[true,"Please provide your email"],
        unique:true,
        match:[
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please provide  valid email"
        ]
    },
    role:{
        type:String,
        default:"user",
        enum:["user","admin"]
    },
    password:{
        type:String,
        minlength:[6,"Please provide a password with min length"],
        required:[true,"Please provide a password"],
        select:false
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    title:{
        type:String
    },
    about:{
        type:String
    },
    place:{
        type:String
    },
    website:{
        type:String
    },
    profile_image:{
        type:String,
        default:"default.jpg"
    },
    blocked:{
        type:Boolean,
        default:false
    },
});

UserSchema.methods.getJwt=function () {
    const {JWT_KEY,JWT_EXPIRE}=process.env;
    const payload={
        id:this._id,
        name:this.name
    };

    const token=jwt.sign(payload,JWT_KEY,{
        expiresIn: JWT_EXPIRE
    });

    return token
};

module.exports=mongoose.model("User",UserSchema);
