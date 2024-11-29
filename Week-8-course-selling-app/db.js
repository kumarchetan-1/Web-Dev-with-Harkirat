const mongoose = require("mongoose")

require("dotenv").config()
const dbConnectionString = process.env.DB_CONNECTION_STRING
mongoose.connect(dbConnectionString)
.then(()=>{ console.log("Connected with db")})
.catch((error) => {
    console.error("Error connecting to the database ", error);
  });

const Schema = mongoose.Schema
const ObjectId = mongoose.ObjectId

const UserSchema = new Schema({
    email: { type: String, unique: true},
    password: String,
    firstName: String,
    lastName: String
}, { timestamps: true } )

const AdminSchema = new Schema({
    email: { type: String, unique: true},
    password: String,
    firstName: String,
    lastName: String
}, { timestamps: true } )

const CourseSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    imageUrl: String,
    creatorId: { type: ObjectId, ref: "admin"}
}, { timestamps: true } )

const PurchaseSchema = new Schema({
    pricePaid : Number,
    courseId: { type: ObjectId, ref: "course"},
    userId: { type: ObjectId, ref: "user"}
}, { timestamps: true })


const userModel = mongoose.model("user", UserSchema)
const adminModel = mongoose.model("admin", AdminSchema)
const courseModel = mongoose.model("course", CourseSchema)
const purchaseModel = mongoose.model("purchase", PurchaseSchema)


module.exports = {
    userModel, adminModel, courseModel, purchaseModel
}