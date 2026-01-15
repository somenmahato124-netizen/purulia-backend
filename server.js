const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// ✅ ROUTES (এখানেই change)
app.use("/api/contact", require("./contactroutes"));
app.use("/api/enquiry", require("./enquiryroutes"));
app.use("/api/feedback", require("./feedbackroutes"));
app.use("/api/booking", require("./bookingroutes"));

// db connect
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// ✅ PORT (Render এর জন্য safe)
const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log("Server running on", PORT);
});
