/* eslint-disable no-undef */
const express=require("express");
const app=express();
const cors= require("cors");

app.use(express.json());
app.use(cors());

const db= require("./models");


//routers
const postRouter= require("./routes/Posts");
app.use("/PruebaPost",postRouter);

db.sequelize.sync().then(()=>{
    app.listen(3001, () => {
        console.log("listening on 3001"); 
       
        
    });
});
