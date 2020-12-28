const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

mongoose.connect('mongodb://localhost/carsellapp');

var userSchema = mongoose.Schema({
    name: String,
    username: String,
    email:String,
    password:String,
});

userSchema.plugin(passportLocalMongoose);

 module.exports = mongoose.model('user',userSchema);