const mongoose = require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://0.0.0.0:27017/Portfolio");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true,
        minLength: 3
    }
})

//we need a Collection
const User = mongoose.model("User", userSchema);
module.exports = User;