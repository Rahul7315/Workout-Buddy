const express = require('express');

//express app
const app = express();

//connect to mongoDB
const mongoose = require('mongoose')
const url = "mongodb+srv://netninja:rahul12345@cluster0.t7gzdss.mongodb.net/workout?retryWrites=true&w=majority"
mongoose.connect(url)
.then((result)=>{
    app.listen(4000);
    console.log('connected');
})
.catch((error)=>{
    console.log(error)
});

//workoutRoute
const workoutRoutes = require('./routes/workoutRoutes')

//middleware 
app.use(express.json())
app.use('/api/workoutRoutes',workoutRoutes)

app.use((req,resp,next)=>{
    console.log(req.method,req.path);
    next();
});
