import express from "express";
const router = express.Router();

import { registerUser, checkExistingUser } from "../controllers/Auth";


// Route for user signup
router.post("/register", registerUser);

// Route for account availability or email existance
router.post("/checkExistingUser", checkExistingUser);

export default router;