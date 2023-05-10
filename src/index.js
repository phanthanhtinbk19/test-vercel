import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE_NAME,
	port: process.env.DB_PORT,
});

app.get("/", (req, res) => {
	res.json("hello");
});

// app.get("/books", (req, res) => {
// 	const q = "SELECT * FROM books";
// 	db.query(q, (err, data) => {
// 		if (err) {
// 			console.log(err);
// 			return res.json(err);
// 		}
// 		return res.json(data);
// 	});
// });

app.listen(8800, () => {
	console.log("Connected to backend.");
});
