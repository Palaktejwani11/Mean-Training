const mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/mydb");
var schema=mongoose.Schema({
    _id:String,
    password:String,
    name:String,
    role:String,
    subject:String
});
module.exports=mongoose.model("user",schema);