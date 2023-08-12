import express from "express";
import bodyParser from "body-parser";
import router from "./router";
import { connectToDB } from "@/db";
import { PORT } from "@/config";

const app = express();

app.use(router);
app.use(bodyParser.json());

connectToDB();

app.listen(PORT || 4000, () => {
  console.log(`=================================`);
  console.log(`=========== ENV: ${PORT} ===========`);
  console.log(`🚀 App listening on the port ${PORT}`);
  console.log(`=================================`);
});
