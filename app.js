const express = require('express')
const app = express()
const mongoose = require('mongoose');
const userRoutes = require('./routes/user')
require('dotenv').config()

//routes

app.use('/api',userRoutes)


//app
const port = process.env.port || 8000

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`)
})


//database
mongoose.connect(
    process.env.MONGO_URI,
    {useNewUrlParser: true}
  )
  .then(() => console.log('DB Connected'))
   
  mongoose.connection.on('error', err => {
    console.log(`DB connection error: ${err.message}`)
  });