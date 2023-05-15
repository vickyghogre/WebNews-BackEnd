const express=require('express');
const mongoose= require('mongoose');
const app=express();

mongoose.connect('mongodb+srv://admin:admin@cluster0.nipypfd.mongodb.net/?retryWrites=true&w=majority')
    .then(()=>console.log('db working'))
    .catch((error)=>console.log(error));

app.use(express.json());
const newsRoutes = require('./routes/news');
app.use(newsRoutes);


app.listen(3001,() => {
    console.log('Server running on port 3001');
})