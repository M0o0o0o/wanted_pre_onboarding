import { db } from "./index.mjs";
import testDataInit from "./testDataInit.mjs";

export default () => {
  db.sequelize
    .sync({
      force: true,
    })
    .then(async () => {
      if (!process.env.NODE_ENV) {
        await testDataInit(db);
      }
    })
    .catch((err) => {
      console.error(err);
    });
};
