import pool from "../database/conn.js";

export const submitForm = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const result = await pool.query(
      "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *",
      [username, email, password]
    );

    res.status(201).json({
      success: true,
      message: "Form submitted successfully",
      user: result.rows[0],
    });
  } catch (error) {
    console.error("Form submission error:", error.message);

    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};