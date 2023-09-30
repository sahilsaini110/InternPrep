const User = require('../models/user')

async function handleGetAllUsers(req, res){
    const allDbUsers = await User.find({});
    return res.json(allDbUsers);
}
 
async function handleGetUserById(req, res){
    const user = await User.findById(req.params.id)
    if(!user) return res.status(404).json({error: "ye kya maang rha h bhai, ye kha se laau hai hi nhi ye to."});
    return res.json(user)
}

async function handlePostUser(req, res){
    const body = req.body;
    if(!body||!body.firstName||!body.lastName||!body.email||!body.gender||!body.title){
        return res.status(400).json({msg: "sab bhar na aalsi..."})
    }
    const result = await User.create({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        gender: body.gender,
        title: body.title,
    });
    console.log("result", result);
    return res.status(201).json({msg:"add krdiya m,  u no worry"})
}


module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    handlePostUser,
}