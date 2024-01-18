/* eslint-disable no-undef */
const express= require('express');
const router= express.Router();

const {PruebaPost} = require("../models");

router.get("/", async(req,res) => {
    const listOfPosts= await PruebaPost.findAll();
    res.json(listOfPosts);
    

});


router.post("/",async (req,res) => {
    const post = req.body;
    await PruebaPost.create(post);
    res.json(post);
    
    
});


module.exports = router;