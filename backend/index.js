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
    origin: ["http://localhost:3001"], // <-- FIX 1: Set the client's origin
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