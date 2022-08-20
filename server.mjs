import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import sequelizeInit from "./models/init.mjs";

import job from "./routes/job.mjs";
import apply from "./routes/apply.mjs";

dotenv.config();

const app = express();

app.set("port", process.env.PORT || 5050);

sequelizeInit();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/job", job);
app.use("/apply", apply);

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
