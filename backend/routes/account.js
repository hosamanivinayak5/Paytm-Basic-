

const { default: mongoose } = require('mongoose');
const z=require("zod");
const express=require("express");
const {Account}=require("../db/index");
const { authmiddleware } = require("../middleware/middleware");
const router=express.Router();
router.get("/balance",authmiddleware,async(req,res)=>{
    const account=await  Account.findOne({
        userid:req.userid
    })
    res.json({
        balance:account.balance
    })

})

router.post("/transfer",authmiddleware,async(req,res)=>{
  const session=await mongoose.startSession();
  
  session.startTransaction();
  const {to,amount}=req.body;
  const account=await Account.findOne({userid:req.userid}).session(session);
  if(!account||account.balance<amount)
  {
      await session.abortTransaction();
      return res.status(400).json({
        msg:"Insufficient balance"
      })
  }
  const toAccount=await Account.findOne({userid:to}).session(session);
  if (!toAccount) {
    await session.abortTransaction();
    return res.status(400).json({
        message: "Invalid account"
    });
}
await Account.updateOne({userid:req.userid},{$inc:{balance:-amount}}).session(session);
await Account.updateOne({userid:to},{$inc:{balance:amount}}).session(session);

await session.commitTransaction();
res.json({
    msg:"Transfer complete"
})
})
module.exports=router;
