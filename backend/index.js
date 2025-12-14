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
    // 1. Local Development Origins
    "http://localhost:3000",          // Your Main Frontend (local testing)
    "http://localhost:3001",          // Your Dashboard (local testing, if different port)
    
    // 2. Production Origins (Replace these with your actual deployed URLs!)
    //    (e.g., after deploying your frontends to Netlify/Vercel)
    "https://your-main-frontend-app.vercel.app", 
    "https://your-dashboard-app.netlify.app", 
    
    // Add any other necessary domains here.
];

app.use(cors({
    origin: (origin, callback) => {
        // Allows requests with no origin (like mobile apps, Postman)
        if (!origin) return callback(null, true);
        
        // Checks if the requesting origin is in our allowed list
        if (allowedOrigins.includes(origin)) {
            callback(null, true); // Allow
        } else {
            // Block the request if the origin is not allowed
            callback(new Error('Not allowed by CORS'), false); 
        }
    }, // <-- FIX 1: Set the client's origin
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "HEAD", "OPTIONS"], // <-- FIX 2: Specify allowed methods
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