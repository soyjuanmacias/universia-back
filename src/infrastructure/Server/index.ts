import express from "express";
import { type NextFunction, type Request, type Response } from "express"
import cors from "cors";
import options from "./cors.js";

export const app = express();

app
  .disable("x-powered-by")
  .use(cors(options))
  .use(express.json())
  .use((req: Request,
    res: Response,
    next: NextFunction) => res.status(200).json("OK"));
