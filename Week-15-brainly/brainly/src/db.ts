// create user models and schemas

import mongoose, {Schema, model, ObjectId } from "mongoose";
import dotenv  from "dotenv";

dotenv.config()
const db_connection_string = process.env.MONGODB_CONNECTION_STRING

if (!db_connection_string) {
    throw new Error("MONGODB_CONNECTION_STRING is not defined in .env file");
    
}

mongoose.connect(db_connection_string)
.then(()=> console.log("Database connnected!"))
.catch((error)=> console.log(`Error in connecting Database: ${error}`))


const UserSchema = new Schema({
    username: { type: String, unique: true },
    password: String
})

const ContentSchema = new Schema({
    link: String,
    type: { type : String, enum: ["vide0", "article", "tweets", "link"] },
    title: String,
    tags: [{ type: mongoose.Schema.Types.ObjectId , ref: "Tags"}],
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
})

const TagsSchema = new Schema({
    title: {type: String, required: true}
})

const LinkSchema = new Schema({
    hash: {type: String, required: true},
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User"}
})

export const UserModel = model("User", UserSchema)
export const ContentModel = model("Content", ContentSchema)
export const TagsModel = model("Tags", TagsSchema)
export const LinksModel = model("Links", LinkSchema)
