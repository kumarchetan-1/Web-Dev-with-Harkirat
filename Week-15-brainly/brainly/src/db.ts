// create user models and schemas

import mongoose from "mongoose";

const schema = mongoose.Schema

mongoose.connect("")
.then(()=> console.log("Database connnected!"))
.catch((error)=> console.log(`Eroor in connecting Database: ${error}`)
)
