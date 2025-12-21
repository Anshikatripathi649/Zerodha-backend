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

app.use(cors({
    origin:  ["http://localhost:3001",
        "https://zerodha-frontend-2ar3.vercel.app",
    ], 
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "HEAD", "OPTIONS"],  
    credentials: true,  
}));

// app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());

mongoose.connect(database_uri)
.then(() => console.log('Connected!'))
.catch((err) => console.error("MongoDB connection error:", err));

app.get("/", (req, res) => {
    res.status(200).send("Backend is running successfully!");
});

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
app.listen(PORT, () =>{
    console.log(`Server is listening on port ${PORT}`);  
});