import { Response } from "express";
import jwt from "jsonwebtoken";

export const generateToken = (res: Response, userId: string) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET as string, {
    expiresIn: "1d",
  });

  res.cookie("IMPACT_CHAIN_JWT", token, {
    httpOnly: true,
    secure :  process.env.NODE_ENV === "production" ? true : false, 
    sameSite: "strict",
    maxAge : 1000 * 60 * 60 * 24,
  });
} 