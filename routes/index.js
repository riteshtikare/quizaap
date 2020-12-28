const express = require('express');
const router = express.Router();
const localStrategy =require('passport-local');
const passport = require('passport');
const user = require('./users');

passport.use(new localStrategy(user.authenticate())); 

/* GET home page. */
router.get('/', function(req, res) {
  res.render('login');
});

//level

router.get('/level',isLoggedIn ,function(req, res) {
  res.render('level');
});

//registerpage

router.get('/reg',function(req,res){
  res.render('register');
})

//register

router.post('/register',function(req,res){
  var newUser =new user({
    username:req.body.username,
    name:req.body.name,
    email:req.body.email
  });
  user.register(newUser,req.body.password)
  .then(function(u){
    passport.authenticate('local')(req,res,function(){
      res.redirect('/level')
    });
  })
  .catch(function(e){
    res.send(e);
  });
});


//login
router.post('/login', passport.authenticate('local',
{
successRedirect:'/level',
failureRedirect:'/'
}),function(req,res){
});


//Quiz

router.get('/quiz',isLoggedIn, function(req,res){
  res.render('quizpage');
})

//endpage

router.get('/end',isLoggedIn, function(req,res){
  res.render('end')
})


function isLoggedIn(req,res,next){
  if(req.isAuthenticated()){
    return next();
  }
  else{
    res.redirect('/');
  }
}





module.exports = router;
