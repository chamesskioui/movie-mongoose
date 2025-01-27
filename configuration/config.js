const mongoose = require("mongoose")
const config = async () => {
    try {
        await mongoose.connect("mongodb+srv://chams:JObv7mE5LpuYSVxE@cluster0.9j34r.mongodb.net/movies?retryWrites=true&w=majority&appName=Cluster0")
       console.log("database is connected")
    } catch (error) {
        console.log("database is not connected")
    }
}
module.exports=config