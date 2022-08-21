import request from "request";
import { assert, expect } from "chai";

describe("POST /apply - 채용공고 조회", () => {
  it("user 데이터를 입력하지 않은 경우", (done) => {
    const options = {
      uri: "http://localhost:5050/apply",
      method: "POST",
      body: { job: 1 },
      json: true,
    };
    request.post(options, (err, res, body) => {
      expect(res.statusCode).to.equal(400);
      done();
    });
  });

  it("채용공고 데이터를 입력하지 않은 경우", (done) => {
    const options = {
      uri: "http://localhost:5050/apply",
      method: "POST",
      body: { user: 1 },
      json: true,
    };
    request.post(options, (err, res, body) => {
      expect(res.statusCode).to.equal(400);
      done();
    });
  });

  it("존재하지 않는 채용공고를 입력한 경우", (done) => {
    const options = {
      uri: "http://localhost:5050/apply",
      method: "POST",
      body: { user: 1, job: 5000 },
      json: true,
    };
    request.post(options, (err, res, body) => {
      expect(res.statusCode).to.equal(400);
      done();
    });
  });

  it("정상 지원", (done) => {
    const options = {
      uri: "http://localhost:5050/apply",
      method: "POST",
      body: { user: 1, job: 1 },
      json: true,
    };
    request.post(options, (err, res, body) => {
      expect(res.statusCode).to.equal(201);
      done();
    });
  });

  it("정상 지원 2", (done) => {
    const options = {
      uri: "http://localhost:5050/apply",
      method: "POST",
      body: { user: 4, job: 200 },
      json: true,
    };
    request.post(options, (err, res, body) => {
      expect(res.statusCode).to.equal(201);
      done();
    });
  });

  it("중복 지원인 경우", (done) => {
    const options = {
      uri: "http://localhost:5050/apply",
      method: "POST",
      body: { user: 1, job: 200 },
      json: true,
    };
    request.post(options, (err, res, body) => {
      expect(res.statusCode).to.equal(201);
      if (res.statusCode === 201) {
        request.post(options, (err, res, body) => {
          expect(res.statusCode).to.equal(400);
          done();
        });
      }
    });
  });

  it("올바르지 않은 데이터를 입력한 경우", (done) => {
    const options = {
      uri: "http://localhost:5050/apply",
      method: "POST",
      body: { user: 1, job: "2a00" },
      json: true,
    };
    request.post(options, (err, res, body) => {
      expect(res.statusCode).to.equal(400);
      done();
    });
  });

  it("올바르지 않은 데이터를 입력한 경우 2", (done) => {
    const options = {
      uri: "http://localhost:5050/apply",
      method: "POST",
      body: { user: "1aa", job: 11 },
      json: true,
    };
    request.post(options, (err, res, body) => {
      expect(res.statusCode).to.equal(400);
      done();
    });
  });
});
