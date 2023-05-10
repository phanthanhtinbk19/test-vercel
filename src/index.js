import express from "express";
import home from "./routes/home.js";
import connectDB from "./config/connectDB.js";
const dotenv = require("dotenv");
dotenv.config();
const app = express();
app.use(express.json());
connectDB();
const PORT = process.env.PORT || 8000;

app.use("/api/", home);
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
