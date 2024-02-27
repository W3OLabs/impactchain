import { NextFunction, Request, Response } from "express";

const notFound = (req: Request, res: Response, next: NextFunction) => {
  res.status(404);
  const error = new Error(`🔍 - Not Found - ${req.originalUrl}`);
  next(error);
};

const errorHandler = (
  error: any,
  req: Request, 
  res: Response,
  next: NextFunction
) => {
  let statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  let message = error.message;

  if (error.name === "CastError" && error.kind === "ObjectId") {
    message = "🔍 - Resource not found";
    statusCode = 404;
  }
  res.status(statusCode).json({
    message,
    stack: process.env.NODE_ENV === "production" ? "🥞" : error.stack,
  });
};

export { notFound, errorHandler };
 