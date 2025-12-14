require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require('bcrypt');
const cookieParser = require("cookie-parser");

const { HoldingsModel} = require("./models/HoldingsModel");
const { PositionsModel} = require("./models/PositionsModel");
const { OrdersModel } = require("./models/OrdersModel");
const { Signup } = require("./controllers/AuthController");
const authRoute = require("./routes/AuthRoute");

const PORT = process.env.PORT || 3000;
const database_uri = process.env.MONGO_URL;

const app = express();  

const allowedOrigins = [
    // 1. Local development for your frontend/dashboard (if they run on 3000 & 3001)
    "http://localhost:3000",
    "http://localhost:3001", 
    
    // 2. The FUTURE deployed URLs of your two frontends (Vercel/Netlify URLs)
    //    You must replace these with your actual deployed URLs later!
    // "https://your-main-frontend-app.vercel.app", 
    // "https://your-dashboard-app.netlify.app", 
];

app.use(cors({
    origin: (origin, callback) => {
        // Allow requests with no origin (like mobile apps, postman, or curl)
        if (!origin) return callback(null, true);
        
        // Check if the requesting origin is in our allowed list
        if (allowedOrigins.includes(origin)) {
            callback(null, true); // Allow
        } else {
            callback(new Error('Not allowed by CORS'), false); // Block
        }
    }, // <-- FIX 1: Set the client's origin
    methods: ["GET", "POST", "PUT", "DELETE"], // <-- FIX 2: Specify allowed methods
    credentials: true, // <-- FIX 3: Must be true to allow cookies
}
));
// app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());

mongoose.connect(database_uri)
.then(() => console.log('Connected!'));

app.use("/", authRoute);

app.get("/allHoldings", async(req, res) => {
    let allHoldings = await HoldingsModel.find();
    res.json(allHoldings);
});

app.get("/allPositions", async(req, res) => {
    let allPositions = await PositionsModel.find();
    res.json(allPositions);
});

app.post("/newOrder", async(req, res) => {
    let newOrder = await OrdersModel({
        name: req.body.name,
        qty :  req.body.qty,
        price:  req.body.price,
        mode :  req.body.mode,
    });
    newOrder.save();
    res.send("Order saved!")
});

// app.get("/signup", Signup, (req, res) => {
//     res.send("successful!");
// });


app.listen(PORT, () =>{
    console.log(`Server is listening on port ${PORT}`);  
});