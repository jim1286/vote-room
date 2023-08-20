import express, { json, urlencoded } from "express";
import router from "./router";
import passport from "passport";
import cors from "cors";
import { connectToDB } from "@/db";
import { PORT } from "@/config";
import { jwtStrategy, localStrategy } from "@/util";

const app = express();

app.use(json());
app.use(urlencoded({ extended: false }));
app.use("/public", express.static("public"));
app.use(passport.initialize());
app.use(router);

const corsOptions = {
  origin: "*",
  methods: ["GET", "PUT", "POST", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));

passport.use("local", localStrategy);
passport.use("jwt", jwtStrategy);

connectToDB();

app.listen(PORT || 4000, () => {
  console.log(`=================================`);
  console.log(`=========== ENV: ${PORT} ===========`);
  console.log(`🚀 App listening on the port ${PORT}`);
  console.log(`=================================`);
});
