const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {
        type: String, // Add the missing comma here
        required: true
    },
    
    email: {
        type: String,
        required: true,
        unique: true // Ensure the email is unique
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now // Automatically set the current date
    },
});
const User = mongoose.model('user', UserSchema);
User.createIndexes();
module.exports = User
