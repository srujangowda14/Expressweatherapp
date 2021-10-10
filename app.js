const express=require("express");
const { dirname } = require("path");
const app=express();
const path=require("path");
const hbs=require("hbs");

const staticPath=path.join(__dirname,"../public");
const templatePath=path.join(__dirname,"../templates/views");
const partialsPath=path.join(__dirname,"../templates/partials");

hbs.registerPartials(partialsPath);

app.set("view engine","hbs");
app.set("views",templatePath);
app.use(express.static(staticPath));

app.get("/",(req,res)=>{
    res.render('index');
});

app.get("/about",(req,res)=>{
    res.render('about');
});

app.get("/weather",(req,res)=>{
    res.render('weather');
});

app.get("*",(req,res)=>{
    res.render('404Error',{
        errorMsg: "Oops! There was an error loading the page"
    });
});

app.listen(8000,"127.0.0.1");