const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://hosamanivinayak5:5hMFeacXpyceX0m7@cluster0.e2zlbco.mongodb.net/PAYTM");
const UserSchema=new mongoose.Schema({
    username:{
        type:String,
        minlength:3,
        required:true,
        unique:true,
        lowercase:true,
        maxlength:30,
        trim:true
    },
    password:{
    type:String,
    required:true,
    minlength:3,
    maxlength:15,
    
    },
    firstname:{
        type:String,
        maxlength:30,
        required:true
    },

    lastname:{
        type:String,
        maxlength:30,
        required:true
    },
})
const AccountsSchema=new mongoose.Schema({
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    balance:{
        type:Number,
        required:true
    },
})

const User=mongoose.model("User",UserSchema);
const Account=mongoose.model("Account",AccountsSchema);
module.exports={
    User,Account
}