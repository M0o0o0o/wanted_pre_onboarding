# wanted_pre_onboarding - 이무열

### DB-SCHEMA
<img src="https://m0o0o0o.github.io/store/pre_onbarding_schema.png" width="500px" height="400px" />

- user 테이블의 경우 회원가입과 로그인을 배제하고 진행했기 때문에 id(PK)만으로 구성했다.
- apply 테이블도 user 테이블과 마찬가지로 id(PK)만으로 구성했다. 

<b>모든 인증과 인가가 필요한 부분은 해당하는 데이터가 DB에 저장되어 있다면, 통과한 것으로 간주하고 진행했습니다.</b>
```text
모든 API의 동작 순서는 다음과 같다.

1. 요청을 받는다.
2. 사용자의 입력 데이터가 있다면 각 API에 대한 Validator로 검증을 수행한다.
  2.1 검증이 실패했다면 해당하는 field들과 message로 400 코드로 리턴한다.
3. 각 요청의 로직을 수행한다.
4. DB에 접근이 필요한 경우 해당하는 테이블의 repository를 호출한다.
  (각 테이블의 repository는 DI를 통해 해당하는 repository에 접근할 수 있다.)
4. 응답한다.
```


### 채용공고를 등록한다.
```
POST /job
body : {
    "company" : "",
    "duty" : "",
    "overview : "",
    "preferr" : "",
    "grant" : 0,
}

```

- 채용공고 등록시 위에 나열한 데이터를 필수적으로 입력받도록 설정했습니다.
- 등록이 완료되면 201 코드를 반환하고, CONTENT-LOCATION에 생성된 자원의 위치를 설정했습니다.

### 채용공고를 수정한다.
```
PATCH /job/id
body : {
   "company" : "",
    "duty" : "",
    "overview : "",
    "preferr" : "",
    "grant" : 0,
}
```

- 채용공고 수정시에는 "회사 id 이외의 모두 수정 가능하다"라는 조건이 있었기 때문에 입력 시 회사 id 값을 입력해도 Validator에서 검증하지 않지만, DAO 변환 시 회사 id값을 배제하는 방식으로 진행했습니다.
- 또한 나머지 위의 body의 key 값들은 모두 필수적으로 입력하지 않고 수정이 필요한 부분만 요청으로 받도록 구현했습니다.

### 채용공고를 삭제한다.
```
DELETE /job/id
```

- 채용공고 삭제는 DB 삭제 후 deletedAt에 값만 설정해 준 후 삭제는 하지 않았습니다.

### 채용공고 목록을 가져온다.
```
GET /job
Query String
- company, duty, region, nation, preferr, page, cnt
```

- 채용공고 목록은 pagination을 이용해서 구현했습니다. 
- page와 cnt를 제외한 검색을 위한 값들은 필수 값이 아닙니다.
