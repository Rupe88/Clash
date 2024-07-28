import express from "express";
import { Request, Response, NextFunction, Application } from "express";
require("dotenv").config();
const app: Application = express();
const PORT = process.env.PORT || 7000;

app.get("/", (req: Request, res: Response) => {
  return res.status(200).json({ message: "Welcome to the API" });
});


app.listen(PORT, ()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})