const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const app=express();
const adminRoutes=require('./routes/admin_r');
const sequelize = require('./util/database');
const { rmSync } = require('fs');


app.use(cors());
app.use(bodyParser.json({extended:false}));


app.use(adminRoutes);

sequelize
.sync()
.then(result=>{ console.log(result); app.listen(8000)})
.catch(err=>console.log(err));






