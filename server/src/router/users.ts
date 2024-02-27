import { isAuthenticated, isOwner } from "../middlewares/auth";
import { deleteUser, getAllUsers, updateUser } from "../controllers/users";
import { Router } from "express";

export default (router: Router) => {
  router.get("/users", isAuthenticated, getAllUsers);
  router.delete("/users/delete/:id", isAuthenticated, isOwner, deleteUser);
  router.patch("/users/update/:id", isAuthenticated, isOwner, updateUser);
};
