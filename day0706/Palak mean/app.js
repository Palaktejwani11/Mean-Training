
const express=require("express")
var app=express();
app.use(express.static('public'));
app.engine("html",require("ejs").renderFile);
app.set("view engine","html")
app.listen(1234);

const homeRouter=require("./routes/home");
const loginRouter=require("./routes/login");

app.use("/",homeRouter);
app.use("/login",loginRouter);
//conditions in mongo
//_id > 20          {id : {$gt;20}}
