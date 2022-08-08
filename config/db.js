var mysql=require("mysql2")

//mysql db
var db = mysql.createConnection({
  host: "localhost",
  user: "hesham",
  password: "199717",
  database:"school"
});
// connect to db 
var connection = db.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports={connection,db}