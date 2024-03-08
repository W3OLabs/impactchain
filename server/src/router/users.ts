import { protect, isOwner } from "../middlewares/auth";
import { deleteUser, getAllUsers, getUserProfile, updateUser } from "../controllers/users";
import { Router } from "express";

export default (router: Router) => {
  router.get("/users", protect, getAllUsers);
  router.delete("/users/delete/:id", protect,  deleteUser);
  router.patch("/users/update/", protect, updateUser);
  router.get("/users/profile", protect, getUserProfile)
};
