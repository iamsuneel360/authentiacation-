import express from "express";
import {
  authUser,
  registerUser,
  deleteUser,
  getUserProfile,
  updateUserProfile,
} from "../controllers/userController.js";
import { protect } from "../controllers/authMiddleware.js";
const router = express.Router();

router.post("/login", authUser);
router.post("/signup", registerUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)
  .delete(protect, deleteUser);

export default router;
