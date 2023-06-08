const mongoose =require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/mydb");
var con=mongoose.connection;
var Schema=mongoose.Schema({_id:String, name:String});
var MyModel=mongoose.model("user",Schema);
module.exports=MyModel;