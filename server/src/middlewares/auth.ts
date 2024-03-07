import { getUserByEmail, getUserBySessionToken } from "../db/users";
import { NextFunction, Request, Response } from "express";
import { get, merge } from "lodash";

export const isAuthenticated = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const sessionToken = req.cookies["IMPACT_CHAIN_AUTH"];
    if (!sessionToken) {
      return res.sendStatus(403);
    }

    const user = await getUserBySessionToken(sessionToken);

    if (!user) {
      return res.sendStatus(403);
    }

    merge(req, { identity: user });

    return next();
  } catch (error) {
    console.log("error in isAuthenticated middleware: ", error);
    return res.sendStatus(400);
  }
};

export const isOwner = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const currentUserId = get(req, "identity._id") as string;

    if (!currentUserId) {
      return res.sendStatus(403);
    }
    if (currentUserId.toString() !== id) {
      return res.sendStatus(403);
    }

    return next();
  } catch (error) {
    console.log("error in isOwner middleware: ", error);
    return res.sendStatus(400);
  }
};

export const verifyUser = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email} = req.body;
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    };

    const user = getUserByEmail(email);
    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }
    return next();
  } catch (error) {
    console.log("error in verifyUser middleware: ", error);
    return res.sendStatus(400);
  }
}

export const localVariables = (req: Request, res: Response, next: NextFunction) => {
  req.app.locals = {
    OTP: null,
    resetSession: false,
  };
  next();
}
