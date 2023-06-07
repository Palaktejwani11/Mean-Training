const express=require("express");
const app=express();
app.listen(3000);
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
app.engine("html",require("ejs").renderFile);
app.set("view engine","html");
const homeRouter=require("./routes/home");
app.use("/",homeRouter);


