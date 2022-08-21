import request from "request";
import { expect } from "chai";

describe("PATCH /job - 채용공고 수정 테스트", () => {
  it("정상 변경 테스트", (done) => {
    const options = {
      uri: "http://localhost:5050/job/1",
      method: "PATCH",
      body: {
        preferr: "phthon, spring",
        grant: 10000000,
      },
      json: true,
    };

    request.patch(options, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it("정상 변경 테스트2", (done) => {
    const options = {
      uri: "http://localhost:5050/job/40",
      method: "PATCH",
      body: {
        preferr: "Java, Spring",
        overview: "자바 스프링 자바 스프링 자바 스프링",
        duty: "프론트엔드 주니어 개발자",
      },
      json: true,
    };

    request.patch(options, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it("정상 변경 테스트3", (done) => {
    const options = {
      uri: "http://localhost:5050/job/40",
      method: "PATCH",
      body: {
        company: 6666,
        preferr: "Java, Spring",
        overview: "스프링 백엔드 주니어 개발자 채용공고",
        duty: "백엔드 주니어 개발자 (0~1)",
      },
      json: true,
    };

    request.patch(options, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it("존재하지 않는 채용 공고 변경 시도", (done) => {
    const options = {
      uri: "http://localhost:5050/job/4000",
      method: "PATCH",
      body: {
        company: 6666,
        preferr: "Java, Spring",
        overview: "스프링 백엔드 주니어 개발자 채용공고",
        duty: "백엔드 주니어 개발자 (0~1)",
      },
      json: true,
    };

    request.patch(options, (err, res, body) => {
      expect(res.statusCode).to.equal(400);
      done();
    });
  });

  it("입력 데이터 오류", (done) => {
    const options = {
      uri: "http://localhost:5050/job/2",
      method: "PATCH",
      body: {
        preferr: "",
        overview: "",
        duty: "백엔드 주니어 개발자 (0~1)",
      },
      json: true,
    };

    request.patch(options, (err, res, body) => {
      expect(res.statusCode).to.equal(400);
      done();
    });
  });

  it("입력 데이터 오류", (done) => {
    const options = {
      uri: "http://localhost:5050/job/2",
      method: "PATCH",
      body: {
        preferr:
          "randonstringrandonstringrandonstringrandonstringrandonstringrandonstringrandonstring",
        duty: "백엔드 주니어 개발자 (0~1)",
      },
      json: true,
    };

    request.patch(options, (err, res, body) => {
      expect(res.statusCode).to.equal(400);
      done();
    });
  });
});
