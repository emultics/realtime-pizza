const express = require('express');
const ejs=require('ejs');
const expressLayout=require('express-ejs-layouts');
const path=require('path');


const app = express();
const PORT=process.env.PORT||3000;


app.use(express.static('public'))

app.use(expressLayout);
app.set('views',path.join(__dirname,'/resources/views'))
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.render('home')
})

app.get('/cart',(req,res)=>{
    res.render('customers/cart')
})

app.get('/register',(req,res)=>{
    res.render('auth/register');
})

app.get('/login',(req,res)=>{
    res.render('auth/login');
})


app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})