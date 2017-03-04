const express = require("express")
const bodyParser = require("body-parser")
const knex = require("knex")

//Now we will configure database connection.

const db = knex({
  client: "mysql",
  connection:{
    host:"127.0.0.1",
    user: "root",
    database: "todo_list",
  }
})

var app = express()

app.use(bodyParser.json())
app.get("/", (req,res) =>{
    db("users").then((data) => {
      res.send("hello bro")
     })
  })


var PORT = process.env.PORT || 3000
app.listen(PORT, function() {
    console.log('Production Express server running at localhost:' + PORT)
})

  //.use(bodyParser.json())
