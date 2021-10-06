const mongoose =require('mongoose');
const Schema = mongoose.Schema;

const userSchema= new Schema({
    username: String,
    googleID: String
});

const User = mongoose.model('users',userSchema);

module.exports = User;