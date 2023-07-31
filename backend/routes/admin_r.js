const express=require('express');
const router=express.Router();
const adminController=require('../controllers/admin_c');

router.post('/postProduct',adminController.postProduct);
router.get('/getProduct',adminController.getProduct);
router.delete('/deleteProduct/:id',adminController.deleteProduct);

module.exports=router;
