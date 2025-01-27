const express=require("express")
const { addfilm, getFilm, getFilmById, deleteFilm, UpdateFilm } = require("../controller/films")
const movierouter=express.Router()
movierouter.post("/add",addfilm)
movierouter.get("/get",getFilm)
movierouter.get("/get/:id",getFilmById)
movierouter.delete("/delete/:id",deleteFilm)
movierouter.put("/update/:id",UpdateFilm)

module.exports=movierouter