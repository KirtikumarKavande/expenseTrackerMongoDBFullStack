const mongoose=require('mongoose')

const Schema=mongoose.Schema

const authSchema=new Schema({
    email:{type:String,required:true},
    password:{type:String,required:true},
    totalExpense:{type:Number,default:0},
})

module.exports=mongoose.model('signupuser',authSchema)