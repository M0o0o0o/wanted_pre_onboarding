import request from "request";
import { expect } from "chai";

describe("GET /job - 채용공고 리스트 조회", () => {
  it("회사 이름 원티드 조회", (done) => {
    const options = {
      uri: "http://localhost:5050/job",
      method: "GET",
      qs: {
        company: "원티드",
      },
      JSON: true,
    };

    request.get(options, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it("company, duty, nation 조회", (done) => {
    const options = {
      uri: "http://localhost:5050/job",
      method: "GET",
      qs: {
        company: "원티드",
        duty: "백엔드",
        nation: "Korea",
      },
      JSON: true,
    };

    request.get(options, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it("검색 조건 없는 경우", (done) => {
    const options = {
      uri: "http://localhost:5050/job",
      method: "GET",
      JSON: true,
    };

    request.get(options, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
});
