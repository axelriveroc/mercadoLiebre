const express = require('express'); 
const app = express(); 
const path = require('path');
const publicPath = path.join(__dirname ,'/public');

app.use(express.static(publicPath));

app.listen(3000, ()=>{
    console.log('servidor corriendo')
})


app.get('/', (req, res)=>{
    res.sendFile(path.resolve('./views/home.html'))
});

app.get('/register', (req, res)=>{
    res.sendFile(path.resolve('./views/register.html'))
})
app.get('/login', (req, res)=>{
    res.sendFile(path.resolve('./views/login.html'))
})


