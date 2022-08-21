import request from "request";
import { assert, expect } from "chai";

/*
development 환경에서는 새로운 DB를 구성하고 
회사와 유저 데이터를 5개씩 생성한다. 
*/

describe("POST /job - 채용 공고 등록 테스트", () => {
  it("정상 등록 테스트 (1번 회사)", (done) => {
    const options = {
      uri: "http://localhost:5050/job",
      method: "POST",
      body: {
        company: "1",
        duty: "백엔드 시니어 개발자",
        overview: "123",
        preferr: "Java",
        grant: "100000",
      },
      json: true,
    };
    request.post(options, (err, res, body) => {
      expect(res.statusCode).to.equal(201);
      done();
    });
  });

  it("정상 등록 테스트 (2번 회사)", (done) => {
    const options = {
      uri: "http://localhost:5050/job",
      method: "POST",
      body: {
        company: "2",
        duty: "백엔드 주니어 개발자",
        overview: "123",
        preferr: "Python",
        grant: "100000",
      },
      json: true,
    };
    request.post(options, (err, res, body) => {
      expect(res.statusCode).to.equal(201);
      done();
    });
  });

  it("등록되지 않은 회사", (done) => {
    const options = {
      uri: "http://localhost:5050/job",
      method: "POST",
      body: {
        company: "1111",
        duty: "123",
        overview: "123",
        preferr: "123123",
        grant: "100000",
      },
      json: true,
    };
    request.post(options, (err, res, body) => {
      expect(res.statusCode).to.equal(400);
      expect(body).to.deep.include({
        error: { field: "company", message: "등록되지 않은 회사입니다." },
      });
      done();
    });
  });

  it("company에 값이 int가 아닌 경우", (done) => {
    const options = {
      uri: "http://localhost:5050/job",
      method: "POST",
      body: {
        company: "1a",
        duty: "123",
        overview: "123",
        preferr: "123123",
        grant: "100000",
      },
      json: true,
    };
    request.post(options, (err, res, body) => {
      expect(res.statusCode).to.equal(400);
      expect(body).to.deep.include({
        errors: [{ field: "company", message: "올바른 값을 입력하세요." }],
      });
      done();
    });
  });

  it("duty에 값이 들어오지 않은 경우.", (done) => {
    const options = {
      uri: "http://localhost:5050/job",
      method: "POST",
      body: {
        company: "1",
        duty: "",
        overview: "123",
        preferr: "123123",
        grant: "100000",
      },
      json: true,
    };
    request.post(options, (err, res, body) => {
      expect(res.statusCode).to.equal(400);
      expect(body).to.deep.include({
        errors: [{ field: "duty", message: "필수 항목입니다." }],
      });
      done();
    });
  });

  it("overview에 값이 들어오지 않은 경우.", (done) => {
    const options = {
      uri: "http://localhost:5050/job",
      method: "POST",
      body: {
        company: "1",
        duty: "백엔드 주니어 개발자",
        overview: "",
        preferr: "123123",
        grant: "100000",
      },
      json: true,
    };
    request.post(options, (err, res, body) => {
      expect(res.statusCode).to.equal(400);
      expect(body).to.deep.include({
        errors: [{ field: "overview", message: "필수 항목입니다." }],
      });
      done();
    });
  });

  it("preferr에 값이 들어오지 않은 경우 ", (done) => {
    const options = {
      uri: "http://localhost:5050/job",
      method: "POST",
      body: {
        company: "1",
        duty: "백엔드 주니어 개발자",
        overview: "채용 공고 등록 overview",
        preferr: "",
        grant: "100000",
      },
      json: true,
    };
    request.post(options, (err, res, body) => {
      expect(res.statusCode).to.equal(400);
      expect(body).to.deep.include({
        errors: [{ field: "preferr", message: "필수 항목입니다." }],
      });
      done();
    });
  });

  it("grant에 문자가 입력된 경우", (done) => {
    const options = {
      uri: "http://localhost:5050/job",
      method: "POST",
      body: {
        company: "1",
        duty: "백엔드 주니어 개발자",
        overview: "채용 공고 등록 overview",
        preferr: "Python",
        grant: "10000a00",
      },
      json: true,
    };
    request.post(options, (err, res, body) => {
      expect(res.statusCode).to.equal(400);
      expect(body).to.deep.include({
        errors: [{ field: "grant", message: "올바른 값을 입력하세요." }],
      });
      done();
    });
  });

  it("overview에 많은 데이터가 입력된 경우", (done) => {
    const options = {
      uri: "http://localhost:5050/job",
      method: "POST",
      body: {
        company: "1",
        duty: "백엔드 주니어 개발자",
        overview:
          "S9EUvmurF5kFebu9uUJ3SP98GqcbRTnXgssjZGssssaj9ssjf6rMEOGW7JXTSuVWg6s7Q2QIq3czftRF0Obk52ecEakHnvaFWGㄴㄴsxZ71ㄴ6MkWgW0Gtpxwkq8cFPiES45VhQkf5SurZI5206kFW13vMRAWl2K1QcQXu18ErUKiK8S0eAVUPFrxEEXQ1LcLHbLLqSzFZ42eKiOuct85hgD9MncoydrXmQvLqrrAViFWQgLuEVQNiQEuiqSHh8IHAGj2O1T7eobeEa4XF4IB5tC2mQJ4M9SqJJCRuKJr3UFai78rucGCMQ",
        preferr: "Python",
        grant: "1000000",
      },
      json: true,
    };
    request.post(options, (err, res, body) => {
      expect(res.statusCode).to.equal(400);
      expect(body).to.deep.include({
        errors: [{ field: "overview", message: "올바른 값을 입력하세요." }],
      });
      done();
    });
  });
});
