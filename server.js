const express = require('express');
const ejs=require('ejs');
const expressLayout=require('express-ejs-layouts');
const path=require('path');
const Config = require('./app/http/config/config');
const session=require('express-session');
const flash=require('express-flash');
const MongoStore=require('connect-mongo')
const mongoose=require('mongoose');
require('dotenv').config();
const config = new Config();
config.load();
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
const connection = mongoose.connection;
connection.once('open', () => {
      console.log('database connected..');
    }).on('error', function (err) {
      console.log(err);
    });

const app = express();
const PORT=process.env.PORT||3000;
//session store
//Session Config
app.use(session({
    secret:process.env.COOKIE_SECRET,
    resave:false,
    saveUninitialized:false,
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_URI,
        client: connection.getClient(),
        collectionName: 'sessions',
        dbName: 'wrap',
        stringify: false,
        mongoOptions: {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        },
      }),
    
    cookie:{maxAge:1000*60*60*24}
}))

app.use(flash())


app.use(express.static('public'))

app.use(expressLayout);
app.set('views',path.join(__dirname,'/resources/views'))
app.set('view engine','ejs');

require('./Routes/web')(app);


app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})