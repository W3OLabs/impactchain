import { getUserBySessionToken } from "../db/users";
import { NextFunction, Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";
import jwt, { JwtPayload } from "jsonwebtoken";
import { get, merge } from "lodash";
import { UserModel } from "../db/users";

function isJwtPayloadWithUserId(
  payload: string | JwtPayload
): payload is JwtPayload & { userId: string } {
  return typeof payload === "object" && "userId" in payload;
}

export const protect = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    let token = req.cookies.IMPACT_CHAIN_JWT;
    if (!token) {
      res.status(401);
      throw new Error("Not authorized, no token found");
    }
    if (token) {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      if (isJwtPayloadWithUserId(decoded)) {
        req.user = await UserModel.findById(decoded.userId).select("-password");
        next();
      } else {
        console.log("decoded: ", decoded)
        res.status(401);
        throw new Error("Not authorized, invalid token");
      }
    }
  }
);

export const isAuthenticated = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const sessionToken = req.cookies["IMPACT_CHAIN_JWT"];
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


export const isOwner = expressAsyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const resourceId = req.params.id; 
  const userId = req.user?._id; 
  if (!userId) {
    res.status(403);
    throw new Error('User ID not found in request');
  }

  const user = await UserModel.findById(resourceId);

  if (!user) {
    res.status(404);
    throw new Error('Resource not found');
  }

  if (user._id.toString() !== userId.toString()) {
    res.status(403);
    throw new Error('User is not authorized to perform this action');
  }

  next();
});


// export const isOwner = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const { id } = req.params;
//     const currentUserId = get(req, "identity._id") as string;

//     if (!currentUserId) {
//       return res.sendStatus(403);
//     }
//     if (currentUserId.toString() !== id) {
//       return res.sendStatus(403);
//     }

//     return next();
//   } catch (error) {
//     console.log("error in isOwner middleware: ", error);
//     return res.sendStatus(400);
//   }
// };
