// company : name, nation, region, gen
import { faker } from "@faker-js/faker";

faker.locale = "ko";
const tech = [
  "Django",
  "Node.js",
  "Spring",
  "Python",
  "Koa",
  "Go",
  "Javascript",
  "Java",
  "C++",
];
const companies = ["원티드", "네이버", "카카오", "구글", "인프런"];

const duties = ["백엔드 주니어 개발자", "백엔드 시니어 개발자"];

export default async (db) => {
  for (let i = 0; i < 5; i++) {
    const company = await db.Company.create({
      name: companies[i],
      nation: "Korea",
      region: faker.address.city(),
      gen: faker.phone.number(),
    });

    await db.User.create({});

    for (let i = 0; i < 8; i++) {
      await db.Job.create({
        duty: i % 2 == 0 ? duties[0] : duties[1],
        overview: faker.lorem.paragraph(),
        perferr: tech[i],
        grant: faker.finance.amount(100000, 1000000, 0, "", true),
      });
    }
  }
};
