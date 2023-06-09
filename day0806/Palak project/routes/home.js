const MyModel=require("../models/mymodel");
const express=require("express");
const router=express.Router();
router.get("/",(req,res)=>{
    MyModel.find().then(function(data){
        res.render("show",{"data":data});
})
})
router.get("/add",(req,res)=>{
    res.render("home");
})
router.post("/add",(req,res)=>{
    var r=new MyModel(req.body);
    r.save();
    res.send("ok");

})
router.get("/delete/:id",(req,res)=>{
    MyModel.deleteMany({"_id":req.params.id}).then();
    res.send("<a href=/users> show all </a>");
})
router.get("/update/:id",(req,res)=>{
    MyModel.find({"_id":req.params.id}).then(function(data){
        res.render("update",{"data":data});
    })
    
})


router.post("/update",(req,res)=>{
    MyModel.updateMany({"_id":req.body._id},req.body).then(function(data){
        res.redirect("/users");
    })
   
})



module.exports=router;
