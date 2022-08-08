var express = require('express');
var router = express.Router();
var {db} = require('../config/db')
var users_Controller=require('../controllers/users_controller') 
var bcrypt=require('bcryptjs')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//sign up 
router.post('/signup',async (req,res)=>{

  users_Controller() 
})

//sign in
router.post('/signin',async (req,res)=>{

})
module.exports = router;
