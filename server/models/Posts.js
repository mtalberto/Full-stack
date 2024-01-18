/* eslint-disable no-undef */
/*
Hey guys, I can see that many people face this error: property 'create' of undefined. Sequelize is very strict in some things and it should be.
 The solution is in Posts.js, where is the define method: sequelize.define("PruebaPost", 
 tiene que ser el mismo que pasas a posts const {PruebaPost} = require("../models");
 y usas el create Pruebapost.create();
*/


module.exports= (sequelize,DataTypes) => {
    const Posts= sequelize.define("PruebaPost",{
        
        title:{
            type: DataTypes.STRING,
            allowNull:false,
           
        },
        postText:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        username:{
            type:DataTypes.STRING,
            allowNull:false,
            
        },
       
        
    });
    
    
    return Posts;
    
};