import "dotenv/config";
const cors = require("cors");
import express from "express";
import routes from "./routers";
import { json, urlencoded } from "body-parser";
import connectDB from "./db/db";
const PORT = process.env.PORT || 4500;

// Connect Database
connectDB();

const app = express();

app.use(urlencoded({ extended: false }));
app.use(json());
app.use(cors());
app.use(routes);

app
  .listen(PORT, () => console.log(`Server on http://localhost:${PORT}`))
  .on("error", (err: any) => {
    console.error(err);
    process.exit(1);
  });
