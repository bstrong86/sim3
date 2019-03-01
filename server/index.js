require('dotenv').config()
const express = require('express'),
    session = require('express-session'),
    massive = require('massive'),
    bodyParser = require('body-parser')



const app = express(),
    {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env

app.use(bodyParser.json())
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 10000000000000
    }
}))

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => console.log(`working on port ${SERVER_PORT}`))
})
