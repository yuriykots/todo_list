const express = require("express")
const bodyParser = require("body-parser")
const knex = require("knex")
import React from 'react'
import { renderToString } from 'react-dom/server'
import Layout from './js/Components/Layout'
import RegisterForm from './js/Components/RegisterForm'

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
      const markup = renderToString(<Layout/>)

    // dump the HTML into a template, lots of ways to do this, but none are
    // really influenced by React Router, so we're just using a little
    // function, `renderPage`
      res.send(renderPage(markup))
})
app.get("/register", (req,res) =>{
      const markup = renderToString(<RegisterForm/>)

    // dump the HTML into a template, lots of ways to do this, but none are
    // really influenced by React Router, so we're just using a little
    // function, `renderPage`
      res.send(renderPage(markup))
})
app.post("/login", (req, res, next)=>{
  res.send("login request received")
})

/*app.get("/", (req,res) =>{
    db("users").then((data) => {
      res.send(data)
    })
})
*/

function renderPage(markup) {
  return `
    <!doctype html public="storage">
    <html>
    <meta charset=utf-8/>
    <title>My First React Router App</title>
    <link rel=stylesheet href=/index.css>
    <div id=app> ${markup} </div>
    <script src="/bundle.js"></script>
   `
}

var PORT = process.env.PORT || 3000
  app.listen(PORT, function() {
    console.log('Production Express server running at localhost:' + PORT)
})
