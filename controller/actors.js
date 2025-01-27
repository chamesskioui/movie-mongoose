const actors=require("../model/actors")
const addActor=async(req,res)=>{
    try {
        const actor=new actors(req.body)
        await actor.save()
        res.status(201).send({msg:"Actor is added successfully",actor})
    } catch (error) {
        res.status(500).send({msg:"actor is not added"})
    }
}
module.exports={addActor}