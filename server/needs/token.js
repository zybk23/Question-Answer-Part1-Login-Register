
const sendJwtToClient=(user,res)=>{
    const token=user.getJwt();

    return res.status(200).json({
        success:true,
        access_token:token,
        data:{
            name:user.name,
            email:user.email,
            id:user._id
        }
    });
};

module.exports={sendJwtToClient};
