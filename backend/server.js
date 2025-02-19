const express = require("express");
const cors = require("cors");
const pool = require("./db");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;


app.get("/", (req, res) => {
    res.send("Backend is running!");
});

// POST: Add Feedback
app.post("/feedback", async (req, res) => {
    const { name, email, message } = req.body;
    try {
        const result = await pool.query(
            "INSERT INTO feedback (name, email, message) VALUES ($1, $2, $3) RETURNING *",
            [name, email, message]
        );
        res.status(201).json(result.rows[0]); // Return inserted feedback
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET: Fetch All Feedback
app.get("/feedback", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM feedback ORDER BY timestamp DESC");
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
