import express from "express"
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

express()
  .use(bodyParser.json())
  .get("/", (req,res) =>{
    db("users").then((data) => {
      res.send(data)
    })
  })
  .listen(3000)


  //.use(bodyParser.json())
