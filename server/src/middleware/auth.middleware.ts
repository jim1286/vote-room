import { UserPayload } from "@/interface";
import { NextFunction, Request, Response } from "express";
import { UnauthorizedError } from "@/error";
import passport from "passport";

export const authenticateLocal = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  passport.authenticate("local", async (err, user, info) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      return next(new UnauthorizedError());
    }

    const payload: UserPayload = {
      id: user._id,
    };

    res.locals.payload = payload;
    return next();
  })(req, res, next);
};

export const authorize = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate("jwt", { session: false }, (err, user, info) => {
    if (!user) {
      return next(new UnauthorizedError());
    }

    if (!err) {
      const payload: UserPayload = {
        id: user._id,
      };

      res.locals.payload = payload;
    }

    return next();
  })(req, res, next);
};
