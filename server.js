// email-backend/server.js
const express = require("express");
const cors = require("cors");
const emailRoutes = require("./email");
require("dotenv").config(); 

const app = express();

app.use(cors({
  origin: ["http://localhost:5173", "https://Akinola-Victor-Portfolio.netlify.app", "http://localhost:3000"], 
  methods: ["POST"],
  allowedHeaders: ["Content-Type"]
}));
app.use(express.json());
app.use("/api", emailRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
