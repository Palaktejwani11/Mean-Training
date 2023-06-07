const MyModel=require("../models/mymodel");
const express=require("express");
const router=express.Router();
router.get("/",(req,res)=>{
    res.render("home");
})
router.post("/add",(req,res)=>{
    var r=new MyModel(req.body);
    r.save();
    res.send("ok");

})
module.exports=router;
