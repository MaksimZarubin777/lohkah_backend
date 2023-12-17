const express = require('express')
const mongoose = require('mongoose')
const {PORT = 3000} = process.env 
const User = require('./models/user')
const { createUser, login, getUserData } = require('./controllers/users')
const { addLesson, addWord, allContent } = require('./controllers/lessons')
const { handleCors } = require('./middlewares/cors')
const app = express()

mongoose.connect('mongodb://LekaAdmin:1234567890@89.111.140.120:27017/leka');

console.log('test is starting 1')
app.use((req, res, next) => {
  console.log('Incoming request:', req.method, req.url);
  next();
});
app.listen(PORT, () => {
  console.log('da', PORT)
})
app.use(express.json());
app.use(handleCors)

app.post('/signup', createUser)
app.post('/signin', login)
app.post('/add', addLesson)
app.get('/', allContent)
app.get('/me', getUserData)
