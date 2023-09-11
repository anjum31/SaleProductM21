// Basic Lib Import
const express =require('express');
const router =require('./src/route/api');
const app= new express();
const bodyParser =require('body-parser');


// Security Middleware Lib Import
const rateLimit =require('express-rate-limit');
const helmet =require('helmet');
const mongoSanitize =require('express-mongo-sanitize');

const hpp =require('hpp');
const cors =require('cors');

// Database Lib Import
const mongoose =require('mongoose');


async function connectToDatabase() {
  try {
    const URL = "mongodb+srv://anjum31:<password>@cluster0.00qycnk.mongodb.net/ProductSale";
    const options = { user: 'anjum31', pass: 'anjum31', autoIndex: true };

    await mongoose.connect(URL, options);
    console.log("Database Connected");
  } catch (err) {
    console.error(err);
  }
}

connectToDatabase();


// Security Middleware Implement
app.use(cors())
app.use(helmet())

app.use(hpp())

app.use(express.json({limit: '50mb'}));
// app.use(express.urlencoded({limit: '50mb'}));


// Body Parser Implement
app.use(bodyParser.json())

// Request Rate Limit
const limiter= rateLimit({windowMs:15*60*1000,max:3000})
app.use(limiter)


// Routing Implement
app.use("/api/v1",router)

// Undefined Route Implement
app.use("*",(req,res)=>{
    res.status(404).json({status:"fail",data:"Not Found"})
})

module.exports=app;