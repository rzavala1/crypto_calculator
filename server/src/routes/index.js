const express=require('express');
const router = express.Router();

const calculatorRouter=require('./calculator.route');

router.use('/api/v1',router);
router.use('/calc',calculatorRouter);
  
module.exports=router;