import SEQUELIZE from "sequelize";
const env = process.env.NODE_ENV || "development";
import config from "../config/config.mjs";

import user from "./tables/User.mjs";
import company from "./tables/Company.mjs";
import job from "./tables/Job.mjs";
import apply from "./tables/Apply.mjs";

const db = {};

const sequelize = new SEQUELIZE(
  config[env].database,
  config[env].username,
  config[env].password,
  config[env]
);

db.sequelize = sequelize;
db.User = user;
db.Company = company;
db.Job = job;
db.Apply = apply;

user.init(sequelize);
company.init(sequelize);
job.init(sequelize);
apply.init(sequelize);

company.associate(db);
job.associate(db);
apply.associate(db);
user.associate(db);

export { db };
