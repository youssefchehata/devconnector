const User = require('../../models/User');

const auth = require('../../middleware/auth');

const express = require('express')
const router = express.Router()


router.get('/',auth, async(req,res)=>{
    try{
const user = await User.findById(req.user.id).select('-password')
res.json(user)
    }catch(err){
console.error(err.message)
res.status(500).send("Server Error")
    }
})

module.exports = router 