import { createUser, getUserByEmail } from "../db/users";
import { Request, Response } from "express";
import "dotenv/config";
import { generateToken } from "../helpers";
import otpGenerator from "otp-generator";

export const register = async (req: Request, res: Response) => {
  try {
    const { email, password, firstname, lastname } = req.body;

    if (!email || !password || !firstname || !lastname) {
      return res.status(400).json({ message: "Invalid data" });
    }
    if (firstname === "" || lastname === "" || email === "" || password === "") {
      return res.status(400).json({ message: "Invalid data: Empty fields" });
    }
    if (!email.includes("@") || !email.includes(".")) {
      return res.status(400).json({ message: "Invalid email" });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters" });
    }
    const user = await getUserByEmail(email);
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = await createUser({
      firstname,
      lastname,
      email,
      password,
    });
    if (newUser) {
      generateToken(res, newUser._id.toString());

      res.status(201).json({
        _id: newUser._id,
        firstname: newUser.firstname,
        lastname: newUser.lastname,
        email: newUser.email,
        isEmailVerified: newUser.isEmailVerified,
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
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
          isEmailVerified: user.isEmailVerified,
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
  res.clearCookie("IMPACT_CHAIN_JWT");
  res.status(200).json({ message: "User logged out" });
};

export async function generateOTP(req: Request, res: Response) {
  req.app.locals.OTP = otpGenerator.generate(6, {
    upperCaseAlphabets: false,
    specialChars: false,
    digits: true,
    lowerCaseAlphabets: false,
  });
  res.status(200).send({ code: req.app.locals.OTP });
}

export const verifyOTP = async (req: Request, res: Response) => {
  const { code } = req.body;
  if (code === req.app.locals.OTP) {
    req.app.locals.OTP = null;
    req.app.locals.resetSession = true;
    res.status(201).json({ message: "OTP verified" });
  } else {
    res.status(400).json({ message: "Invalid OTP" });
  }
};

export const createResetSession = async (req: Request, res: Response) => {
  if (req.app.locals.resetSession) {
    req.app.locals.resetSession = false;
    res.status(200).json({ message: "Access granted" });
  } else {
    res.status(400).json({ message: "Session expired" });
  }
};

export const resetPassword = async (req: Request, res: Response) => {
if (!req.app.locals.resetSession) {
    return res.status(400).json({ message: "Session expired" });
  }


  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Invalid data" });
  }
  const user = await getUserByEmail(email);
  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }
  req.app.locals.resetSession = false;
  user.password = password;
  await user.save();
  res.status(200).json({ message: "Password reset" });
};
