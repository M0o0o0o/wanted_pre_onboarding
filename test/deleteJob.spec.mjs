import request from "request";
import { expect } from "chai";
import dotenv from "dotenv";
import init from "../models/init.mjs";

describe("DELETE /job/id - 채용공고 삭제 테스트", () => {
  it("정상 삭제 테스트1", (done) => {
    const options = {
      uri: "http://localhost:5050/job/2",
      method: "DELETE",
    };

    const options2 = {
      uri: "http://localhost:5050/job/2",
      method: "GET",
    };

    request.delete(options, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      if (res.statusCode === 200) {
        request.get(options2, (err, res, body) => {
          expect(res.statusCode).to.equal(400);
          done();
        });
      }
    });
  });

  it("정상 삭제 테스트2", (done) => {
    const options = {
      uri: "http://localhost:5050/job/199",
      method: "DELETE",
    };

    const options2 = {
      uri: "http://localhost:5050/job/199",
      method: "GET",
    };

    request.delete(options, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      if (res.statusCode === 200) {
        request.get(options2, (err, res, body) => {
          expect(res.statusCode).to.equal(400);
          done();
        });
      }
    });
  });

  it("존재하지 않는 채용공고 삭제 시도", (done) => {
    const options = {
      uri: "http://localhost:5050/job/4000",
      method: "DELETE",
    };

    request.delete(options, (err, res, body) => {
      expect(res.statusCode).to.equal(400);
      done();
    });
  });

  it("삭제한 채옹공고 재삭제 시도", (done) => {
    const options = {
      uri: "http://localhost:5050/job/144",
      method: "DELETE",
    };

    request.delete(options, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      if (res.statusCode === 200) {
        request.delete(options, (err, res, body) => {
          expect(res.statusCode).to.equal(400);
          done();
        });
      }
    });
  });

  it("id-param에 숫자 아닌 값 입력", (done) => {
    const options = {
      uri: "http://localhost:5050/job/asd",
      method: "DELETE",
    };

    request.delete(options, (err, res, body) => {
      expect(res.statusCode).to.equal(400);
      done();
    });
  });

  it("id-param에 숫자 아닌 값 입력 2", (done) => {
    const options = {
      uri: "http://localhost:5050/job/1a",
      method: "DELETE",
    };

    request.delete(options, (err, res, body) => {
      expect(res.statusCode).to.equal(400);
      done();
    });
  });
});
