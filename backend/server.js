import express from "express";
import pg from "pg";


const { Pool } = pg;

const pool = new Pool({
    connectionString: "postgresql://postgres:[Sonu9754512002]@db.yduddaikoqzmywerlacd.pooler.supabase.co:5432/postgres",
    ssl: {
        rejectUnauthorized: false
    }
});

const app = express();

app.get("/test-db", async (req, res) => {
    try {
        const result = await pool.query("SELECT NOW()");

        res.json({
            connected: true,
            time: result.rows[0].now
        });

    } catch (error) {
        console.error("Database error:", error);

        res.status(500).json({
            connected: false,
            error: error.message
        });
    }
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});