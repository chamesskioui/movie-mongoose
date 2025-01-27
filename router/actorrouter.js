const express=require("express")
const { addActor } = require("../controller/actors")
const actorrouter=express.Router()
actorrouter.post("/add",addActor)
module.exports=actorrouter