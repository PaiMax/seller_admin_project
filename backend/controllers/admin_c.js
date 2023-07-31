const product=require('../models/admin');
exports.postProduct=(req,res,next)=>{
    product.create({
        sp:req.body.Price,
        product_name:req.body.Name,
        category:req.body.Category


    })
    .then((result)=>{
        product.findByPk(result.id,{attributes :['id','sp','product_name','category']})
        .then((data)=>res.send(data))
        .catch((Err)=>console.log(Err));
    })
    .catch(err=>console.log(err));


}
exports.getProduct=(req,res,next)=>{
    product.findAll({attributes:['id','sp','product_name','category']})
    .then(product=>res.send(product))
    .catch(err=>console.log(err));
}



exports.deleteProduct=(req,res,next)=>{
    idToDelete=req.params.id;
    product.destroy({where:{id:idToDelete}}) 
    .then(product=>res.send('deleted sucessful'))
    .catch(err=>console.log(err));
}