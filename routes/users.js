const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

mongoose.connect("mongodb+srv://ritesh_16:ritesh16@cluster0.tkdvm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

var userSchema = mongoose.Schema({
    name: String,
    username: String,
    email:String,
    password:String,
});

userSchema.plugin(passportLocalMongoose);

 module.exports = mongoose.model('user',userSchema);
