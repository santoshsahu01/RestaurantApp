import express from "express";
import { submitForm } from "../controllers/create.user.js";

const router = express.Router();

router.post("/submit", submitForm);

export default router;