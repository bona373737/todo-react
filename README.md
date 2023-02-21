# wanted-pre-onboarding-frontend
원티드 프리온보딩 프론트엔드 인턴십과정 선발과제    
https://github.com/walking-sunset/selection-task
- 로그인/회원가입
- 투두리스트

## 버전정보
- nodejs v16.18.0
- react router dom v6

## 프로젝트의 실행 방법
- yarn start
- 접속계정   
  ID:nana@nana.com   
  PW:12345678
  
## 문서구조
```
index.js ─ App.js ─┬─ Signup.js ─ CommonForm.js
                   ├─ Signin.js ─ CommonForm.js
                   └─ Todo.js
```
회원가입,로그인페이지에 동일하게 사용될 form을 공통컴포넌트로 분리.   
회원가입,로그인페이지의 사용자입력값 유효성검사를 위한 함수를 validCheck.js파일로 분리.

## 데모 영상
![demo](https://user-images.githubusercontent.com/73373898/219060245-f2aaacbb-39ae-44d9-bc72-51a269741f01.gif)
