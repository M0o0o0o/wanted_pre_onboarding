import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import sequelizeInit from "./models/init.mjs";

dotenv.config();

const app = express();

app.set("port", process.env.PORT || 8080);

sequelizeInit();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", (req, res) => {
  res.send("welcome page");
});

app.use((req, res, next) => {
  const error = new Error();
  next(error);
});

app.use((err, req, res, next) => {
  res.status(404).send("error occured");
});

app.listen(app.get("port"), () => {
  console.log("server on");
});
