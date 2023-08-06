import express from "express";
import bodyParser from "body-parser";
import router from "./router";
import { connectToDB } from "@/db";

const app = express();
const PORT = process.env.PORT;

app.use(router);
app.use(bodyParser.json());

connectToDB();

app.listen(PORT || 4000, () => {
  console.log(`=================================`);
  console.log(`======= ENV: ${process.env.PORT} =======`);
  console.log(`🚀 App listening on the port ${PORT}`);
  console.log(`=================================`);
});
