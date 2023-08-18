import { SECRET_KEY } from "@/config";
import { UnauthorizedError } from "@/error";
import { UserRepository } from "@/repository";
import { ExtractJwt, Strategy as JwtStrategy } from "passport-jwt";
import { Strategy as LocalStrategy } from "passport-local";
import bcrypt from "bcrypt";

const jwtOptions = {
  secretOrKey: SECRET_KEY,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

export const jwtStrategy = new JwtStrategy(
  jwtOptions,
  async (payload, done) => {
    if (!payload || !payload.id) {
      return done(null, undefined);
    }

    try {
      const user = await UserRepository.findById(payload.id);

      return done(null, user);
    } catch (err) {
      return done(err, undefined);
    }
  }
);

export const localStrategy = new LocalStrategy(
  {
    usernameField: "userId",
    passwordField: "password",
  },
  async (userId, password, done) => {
    try {
      const user = await UserRepository.findByUserId(userId);

      if (!user) {
        return done(new UnauthorizedError());
      }

      const hashed = await bcrypt.hash(password, 10);
      const match = await bcrypt.compare(password, hashed);

      if (!match) {
        return done(new UnauthorizedError());
      }

      return done(null, user);
    } catch (err) {
      return done(err);
    }
  }
);
