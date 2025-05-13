const express = require("express")
require('dotenv').config()

const app = express();

const users = [
    {
      "name": "Liam",
      "surname": "Foster",
      "email": "liam.foster@example.com",
    },
    {
      "name": "Emma",
      "surname": "Griffin",
      "email": "emma.griffin@example.com",
    },
    {
        "name": "Ethan",
        "surname": "Parker",
        "email": "ethan.parker@example.com",
    }
  ]

app.get('/',(req,res)=> {
    res.send("Welcome to the API.")
})   

app.get('/users',(req,res)=>{

    res.send(users);
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
  })


