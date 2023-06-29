const express= require("express")
const router=express.Router()
let data=require("../mock/four.json")
router.get("/data",(req,res)=>{
    res.send({msg:"我是路由地址",data})
})
module.exports=router