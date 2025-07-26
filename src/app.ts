import express from "express";
import dotenv from "dotenv";
import { Request, Response, Express } from "express";
import path from "path";
import { fileURLToPath } from "url";
import corsOption from "./config/cors.config.js";
import cors from "cors";
import helmet from "helmet";

//used concurrently and rimraf on script

const app: Express = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); //views loc

//middleware >>app.use(middleware) runs for everyRequest |  app.set(key,val)
app.use(express.static(path.join(__dirname, "../public"))); //static file serve from this folder damn pain for css
app.use(helmet());
dotenv.config();
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOption));

//app.use("/endpoint",middleware) will only run for this endpoint

//route handling

//uploader shits

export default app;
