const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {type: String, required:[true, "FirsT Name can't be empty!!"]},
    lastName: {type: String, required:[true, "Last Name can't be empty!!"]},
    city: {type: String},
    state: {type: String},
})