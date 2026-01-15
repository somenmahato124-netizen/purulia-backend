const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/contact", require("./routes/contact"));
app.use("/api/enquiry", require("./routes/enquiry"));
app.use("/api/feedback", require("./routes/feedback"));
app.use("/api/booking", require("./routes/booking"));

// db connect
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running on", PORT));
