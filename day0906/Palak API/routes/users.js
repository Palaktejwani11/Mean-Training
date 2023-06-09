const express=require("express");
const router = express.Router();
const User=require("../models/usermodel");


router.get("/add",async (req,res)=>{
    
    res.render("adduser");
});


router.get("/",async (req,res)=>{
    var data=await User.find();
    res.send(data);
});
router.post("/",async(req,res)=>{
    var user =new User(req.body);
    try{
    var r=await user.save();
    res.send(r);}
    catch(err){res.send(err);}
});
router.get("/:id",async (req,res)=>{
    var data=await User.findById(req.params.id);
    res.send(data);
});
router.get("/delete/:id",async (req,res)=>{
    var data=await User.findByIdAndDelete(req.params.id);
    res.send(data);
});
router.get("/edit/:id/:name",async (req,res)=>{
    var data=await User.findByIdAndUpdate(req.params.id,{"name":req.params.name});
    res.send(data);
});
//router.get("/:id");
router.post("/");
//router.put("");
//router.delete("/:id");
module.exports=router;
