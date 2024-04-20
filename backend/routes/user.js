const express=require("express");
const router=express.Router();

const jwt=require("jsonwebtoken");
const jwtsecret=require("../config")
const z=require("zod");

const { User,Account } = require("../db");
const {authmiddleware }= require("../middleware/middleware");


const signupbody=z.object({
    username:z.string().email(),
    password:z.string(),
    firstname:z.string(),
    lastname:z.string()
})
router.post("/signup",async(req,res)=>
{
  const {success}=signupbody.safeParse(req.body);
 if(!success)
 {
    return res.status(411).json({
        msg:"Email already taken"
    })
 }
 const existinguser=await User.findOne({
    username:req.body.username
 })
 if(existinguser)
 { return res.status(411).json({
    msg:"Email already taken"
})
 }
const user=await User.create({
    username:req.body.username,
    password:req.body.password,
    firstname:req.body.firstname,
    lastname:req.body.lastname
})

const userid=user._id;

await Account.create({
    userid,
    balance:1+Math.random()*10000,
})

const token=jwt.sign({
    userid
},jwtsecret)
    
res.json({
        msg:"User created succesfully",
        token:token
    })
}
)

const signinbody=z.object({
    username:z.string().email(),
    password:z.string(),
})

router.post("/signin",async(req,res)=>
{
   const {success}=signinbody.safeParse(req.body);
   if(!success)
   {
    return res.status(411).json({
        message: "Error while logging in"
    })
   }

    const user=await User.findOne({
        username:req.body.username,
        password:req.body.password,
    })
    if(user)
    { const token=jwt.sign({
        userid:user._id,
    },jwtsecret);
    res.json({
        token,
    })
    return;

    }
    return res.status(411).json({
        message: "Error while logging in"
    })
})
const updateuserdetails=z.object({
    password:z.string(),
    firstname:z.string(),
    lastname:z.string()
})
router.put("/", authmiddleware, async (req, res) => {
    const { success } = updateuserdetails.safeParse(req.body);
    if (!success) {
        return res.status(411).json({
            msg: "Error while updating information"
        });
    }

    try {
        await User.updateOne(
            { _id: req.userid }, // Filter object to find the document by its ID
            { $set: req.body }   // Update object to set the fields from the request body
        );

        res.json({
            message: "Updated successfully"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: "Internal server error"
        });
    }
});

router.get("/bulk", async (req, res) => {
    const filter = req.query.filter || ""; // Get the filter parameter from the query string
    const users = await User.find({
        $or: [{
            firstname: { "$regex": filter }
        }, {
            lastname: { "$regex": filter }
        }]
    });
    res.json({
        user: users.map(user => ({
            username: user.username,
            firstname: user.firstname,
            lastname: user.lastname,
            _id: user._id // Corrected from user.userid
        }))
    });
});
module.exports=router;