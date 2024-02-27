
import { login, logout, register } from "../controllers/auth";
import { Router } from "express";

export default (router: Router) => {
  router.post("/auth/register", register)
  router.post("/auth/login", login)
  router.post("/auth/logout", logout)
};
