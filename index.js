const { getRandomValues } = require('crypto')
const express = require('express')
const bodyParser = require("body-parser")
const app = express()
const port = 3001
const pool =require('./dbConn')
const { create } = require('domain')
const { response } = require('express')
const db_link = "/testdb"
const ControlFile = require("./todoController/todoController")
const todocontroller = new ControlFile()


app.use(bodyParser.json())

app.get('/', (request, response) => {
    response.json({info : 'Node.js, Express, and Postgres API'})   
})

app.get(db_link, todocontroller.ControlAllTask)

app.post(db_link, todocontroller.Controlcreatetask)

app.put(db_link, todocontroller.ControlupdateTask)

app.delete(db_link, todocontroller.ControldeleteTask)

app.get(db_link + '/counter', todocontroller.ControlgetResult)
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

