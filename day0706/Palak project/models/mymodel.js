const mongoose =require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/mydb");
var con=mongoose.connection;
var Schema=mongoose.Schema({enroll:String, name:String});
var MyModel=mongoose.model("mycol",Schema);
module.exports=MyModel;