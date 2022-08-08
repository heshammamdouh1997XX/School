var bcrypt=require('bcryptjs')


const signup_Post = ()=>{
    username = req.body.username
    password = req.body.password
    //validate the username and password #1
    validateString({username},"Invalid Username")
    validateSize({password},'Password should be more than 5 charachters')
    validateString({password},"Invalid password")
  
  
    function validateString(label,message){
      if (!label || typeof label == 'string') 
      res.json({status:"error",error:message})
    }
  
    function validateSize(label,message){
      if(label.length < 5) res.json({status:"error",error:message})
    }
  
    //encrypt the password  #2 
    var encrypted_password = await bcrypt.hash(password,10)
    console.log(encrypted_password)
  
    
    try {
      //put the data in db
      let data =  {"username":username,"password": encrypted_password };
      let sql = "insert into users set ?";
      
      db.query(sql, data, (err, result) => {
        if (err.errno == 1062) res.send("duplicate username !!");
        else throw err;
        res.send("User Created Successfully !!!");
      });
    } catch (err) {
      console.log({"error is here":err});
    }
    
  // trying to prevent the app from crashing (if there is duplicate)

}
module.exports = {signup_Post}