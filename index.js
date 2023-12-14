const express = require('express')
const mongoose = require('mongoose')
const {PORT = 3000} = process.env 
const User = require('./models/user')
const { createUser, login } = require('./controllers/users')
const { addLesson, addWord } = require('./controllers/lessons')
const { handleCors } = require('./middlewares/cors')
const app = express()

mongoose.connect('mongodb://89.111.140.120:27017/leka');

app.listen(PORT, () => {
  console.log('da', PORT)
})
app.use(express.json());
app.use(handleCors)

app.post('/signup', createUser)
app.post('/signin', login)
app.post('/add', addLesson)