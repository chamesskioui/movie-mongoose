const mongoose=require("mongoose")
const actorsSchema=new mongoose.Schema({
    name:{type:String,required:true},
    age:{type:Number,required:true},
    gender:{type:String,required:true},
    movies:[{type:mongoose.Schema.Types.ObjectId,ref:"films"}],
    awards:[{type:String}],
    bio:{type:String},
    image:{type:String}
})
module.exports=mongoose.model("actors",actorsSchema)