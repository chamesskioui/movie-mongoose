const mongoose = require("mongoose")
const movieschema = new mongoose.Schema({
    title: String,
    poster: String,
    genre: String,
    length: Number,
    diractor: String,
    actors:{type:Array,default:[]}
}, { timestamps: true })
module.exports=mongoose.model("films",movieschema)