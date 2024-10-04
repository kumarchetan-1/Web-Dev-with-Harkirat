    const mongoose = require("mongoose")
    mongoose.connect('mongodb+srv://chetankumar:15R5IY7aOO6Hs4TU@cluster0.g2uzt.mongodb.net/todo-application-chetan')
    .then(() => {
      console.log('MongoDB connected'); 
    }).catch(err => {
      console.error('Connection error', err);
    });
  
    const Schema = mongoose.Schema
  const ObjectId = mongoose.ObjectId
  
  const User = new Schema({
      email: { type: String, unique: true, sparse: true },
      password: String,
      name: String
  })
  
  const Todo = new Schema({
      description: String,
      todoStatus: Boolean,
      userId: ObjectId
  })
  
  const UserModel = mongoose.model("user", User)
  const TodoModel = mongoose.model("todos", Todo)

    module.exports = {
        UserModel, TodoModel
    }