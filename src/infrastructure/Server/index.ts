import express from "express";
import cors from "cors";
import options from "./cors.js";

export const app = express();

app
  .disable("x-powered-by")
  .use(cors(options))
  .use(express.json())
  .use((req, res, next) => res.status(200).json("OK"));
