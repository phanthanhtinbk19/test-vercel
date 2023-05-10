import express from "express";
import home from "./routes/home.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use("/api/", home);
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});