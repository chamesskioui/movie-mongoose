const films=require("../model/model")
const addfilm=async(req,res)=>{
    try {
        const film=new films(req.body)
        await film.save()
        res.status(200).send({msg:"movie is saved",filmname:film.title})
    } catch (error) {
        res.status(500).send({msg:"movie is not saved",error})
    }
}
const getFilm = async(req,res)=>{
    console.log("hello world");
    
    try {
        const film=await films.find()
        res.status(200).send({msg:"film found",film})
    } catch (error) {
        res.status(500).send({msg:"film not found"})
    }
}
const getFilmById=async(req,res)=>{
    try {
        const film=await films.findById(req.params.id)
        res.status(200).send({msg:"those are your films",film})
    } catch (error) {
        res.status(500).send({msg:"film not found"})
    }
}
const deleteFilm=async(req,res)=>{
    try {
        
        const film=await films.findByIdAndDelete(req.params.id)
        const filmlist=await films.find()
        res.status(500).send({msg:"Film deleted successfully",filmlist})
    } catch (error) {
        res.status(200).send({msg:"film not deleted"})
    }
}
const UpdateFilm=async(req,res)=>{
    try{
        const film=await films.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(200).send({msg:"Film updated successfully",film})
    }
    catch(error){
        res.status(500).send({msg:"Film not updated"})
    }
}

module.exports={addfilm,getFilm,getFilmById,deleteFilm,UpdateFilm}