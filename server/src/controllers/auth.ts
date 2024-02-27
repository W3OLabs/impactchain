import { createUser, getUserByEmail } from "../db/users";
import { Request, Response } from "express";
import "dotenv/config";
import { generateToken } from "../helpers";

export const register = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    const { email, password, username } = req.body;

    if (!email || !password || !username) {
      return res.sendStatus(400);
    }
    const user = await getUserByEmail(email);
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = await createUser({
      email,
      password,
      username,
    });
    if (newUser) {
      generateToken(res, newUser._id.toString());

      res.status(201).json({
        _id: newUser._id,
        name: newUser.username,
        email: newUser.email,
      });
    } else {
      res.status(400).json({ message: "User not created, Invalid data" });
    }
  } catch (error) {
    res.sendStatus(400);
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.sendStatus(400);
    }

    const user = await getUserByEmail(email).select("+password");

    if (user && (await user.matchPassword(password))) {
      generateToken(res, user._id.toString());
      res
        .status(200)
        .json({
          _id: user._id,
          name: user.username,
          email: user.email,
        })
        .end();
    } else {
      return res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    console.log("Error in login: ", error);
    res.sendStatus(400);
  }
};

export const logout = async (req: Request, res: Response) => {
  res.status(200).json({ message: "Logged out" });
};
