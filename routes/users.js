const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

mongoose.connect('mongodb+srv://ritesh:Ritesh@123@cluster0.tkdvm.mongodb.net/ritesh?retryWrites=true&w=majority');

var userSchema = mongoose.Schema({
    name: String,
    username: String,
    email:String,
    password:String,
});

userSchema.plugin(passportLocalMongoose);

 module.exports = mongoose.model('user',userSchema);
