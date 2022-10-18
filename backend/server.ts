import "dotenv/config";
import express, { Express, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import db from "./Model";
import userRoutes from "./routes/user/userRoutes";

const port = process.env.PORT || 5000;

const app: Express = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

db.sequelize.sync({ force: false }).then(() => {
  console.log("Drop and Resync Db");
  console.log("Connected to database");
});

app.use("/api/user", userRoutes);
app.get("/", (req: Request, res: Response) => {
  res.setHeader("Content-Type", "text/plain");
  res.send("Hello World!");
  res.end();
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
