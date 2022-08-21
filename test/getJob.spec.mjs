import request from "request";
import { expect } from "chai";

describe("GET /job/Id - 하나의 채용공고 조회 테스트", () => {
  it("정상 조회", (done) => {
    const options = {
      uri: "http://localhost:5050/job/1",
      method: "GET",
    };

    request.get(options, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it("정상 조회2", (done) => {
    const options = {
      uri: "http://localhost:5050/job/132",
      method: "GET",
    };

    request.get(options, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it("정상 조회3", (done) => {
    const options = {
      uri: "http://localhost:5050/job/200",
      method: "GET",
    };

    request.get(options, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it("존재하지 않는 채용공고 조회", (done) => {
    const options = {
      uri: "http://localhost:5050/job/400",
      method: "GET",
    };

    request.get(options, (err, res, body) => {
      expect(res.statusCode).to.equal(400);
      done();
    });
  });

  it("채용공고 id-param에 숫자 아닌 값 요청", (done) => {
    const options = {
      uri: "http://localhost:5050/job/40aa0",
      method: "GET",
    };

    request.get(options, (err, res, body) => {
      expect(res.statusCode).to.equal(400);
      done();
    });
  });

  it("채용공고 id-param에 숫자 아닌 값 요청 2 ", (done) => {
    const options = {
      uri: "http://localhost:5050/job/aasdasda",
      method: "GET",
    };

    request.get(options, (err, res, body) => {
      expect(res.statusCode).to.equal(400);
      done();
    });
  });

  it("채용공고 id-param에 숫자 아닌 값 요청 2 ", (done) => {
    const options = {
      uri: "http://localhost:5050/job/aasdasda",
      method: "GET",
    };

    request.get(options, (err, res, body) => {
      expect(res.statusCode).to.equal(400);
      done();
    });
  });

  it("채용공고 삭제 후 요청", (done) => {
    const getOptions = {
      uri: "http://localhost:5050/job/1",
      method: "GET",
    };

    const deleteOptions = {
      uri: "http://localhost:5050/job/1",
      method: "DELETE",
    };

    request.delete(deleteOptions, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      if (res.statusCode === 200) {
        request.get(getOptions, (err, res, body) => {
          expect(res.statusCode).to.equal(400);
          done();
        });
      }
    });
  });
});
