const express= require("express");
const mongoose = require('mongoose');
const bodyprse= require("body-parser")
mongoose.connect('mongodb://localhost:27017/assignment_4');
const app= express();
const schema1= require("./model/schema");
const { use } = require("express/lib/application");
var methodOverride = require('method-override')
app.use(methodOverride("_method"))
app.use(express.static("public"))
app.use(bodyprse());
app.set("views","./views")
app.set("view engine","ejs")

app.get("/",async(req,res)=>{
    // res.send("ok")
    const schema2= await schema1.find()
    res.render("home.ejs",{schema2})
})

app.post("/ass4/add",async(req,res)=>{
   const rrr =await schema1.create ({

    name: req.body.pre,
    email: req.body.email,
    isPromoted:req.body.isPromoted
})
console.log(rrr)
res.redirect("/")
}
)
app.put("/ass4/:id/isPromoted",async(req,res)=>{
    await schema1.updateOne({_id:req.params.id},[{ $set: { isPromoted: { $not: ["$isPromoted"] }} }]);
    console.log("mark completed")
    res.redirect("/")
})
app.delete("/ass4/:id/delete",async(req,res)=>{
    await schema1.deleteOne({_id:req.params.id});
    console.log("deleted")
    res.redirect("/")
})
app.listen(5000,console.log("server  is listening port 5000 "))


  // if ("$isPromoted"!=true){
    //     await schema1.updateOne({_id:req.params.id},{isPromoted:true});
    // }else if(req.body.isPromoted==true){
    //     await schema1.updateOne({_id:req.params.id},{isPromoted:false});
    // }

// await schema1.updateOne({_id:req.params.id},isPromoted?{isPromoted:false}:{isPromoted:true});
    // await schema1.updateOne({_id:req.params.id}, [{ $set: { isPromoted: { $not: "$isPromoted" } } }]);
    // // [
    //     { $set: { isPromoted: { $not: "$isPromoted" } } }
    //   ])
    // { $set: { isPromoted: { $not: [ isPromoted ] }} }