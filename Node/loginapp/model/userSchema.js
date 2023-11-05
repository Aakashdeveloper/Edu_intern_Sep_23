const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    phone:Number,
    role:String
})

mongoose.model('User',userSchema);
module.exports = mongoose.model('User')