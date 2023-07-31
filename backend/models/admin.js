const Sequelize=require('sequelize');
const sequelize=require('../util/database');
const product=sequelize.define('products',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false

    },
    sp:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    product_name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    category:{
        type:Sequelize.STRING,
        allowNull:false
    }

    
} );
module.exports=product;