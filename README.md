# Fast Campus Team Project- Team6 (elass)

## 프로젝트 계획서 (Front-end)

### 팀원

* 차혜진
* 김지수
* 이진아



### 팀 프로젝트 소개

* 숨고, 오투잡과 유사한 재능 공유 서비스 - 튜터로 등록한 사용자가 강의 정보를 등록하고, 다른 회원들이 해당 강의를 수강할 수 있는 서비스를 제공한다.



### 프로젝트 목적

* 백엔드와 협업을 통한 완성된 결과 도출
* 웹 접근성과 웹 표준에 대한 깊은 이해
* JavaScript 객체지향 프로그래밍 스킬
* 프로젝트를 완료했다는 뿌듯함



### 기능 MVP(Minimal Viable Product)

* 회원가입
* 수강신청
* 정보등록 및 조회(검색)



###  서비스 환경

* 브라우저 대응: IE 9+
* 반응형: 모바일 , 태블릿, 데스크탑
* 접근성



### 사용기술

* Pug
* Sass
* Vue
* Webpack



### 업무 분담 및 협업 방안

* 웹사이트에 필요한 기능별로 Component 화 하여 분배 예정
* Git 을 활용한 버전관리
* 코드 리뷰를 통한 Bug-Catching 및 효율적인 코드 작성

### Routing Table
| 1DEPTH     	| 2DEPTH       	| PATH                    	|
|------------	|--------------	|-------------------------	|
| 메인       	|              	| /                       	|
| 회원가입   	|              	| /signup                 	|
| 로그인     	|              	| /signin                 	|
| 리스트     	|              	| /list                   	|
| 상세       	|              	| /detail                 	|
| 마이페이지 	|              	| /mypage                 	|
|            	| 회원정보수정 	| /mypage/modify          	|
|            	| 수강리스트   	| /mypage/mylist          	|
|            	| 찜리스트     	| /mypage/favoritelist    	|
|            	| 튜터등록     	| /mypage/registertutor   	|
|            	| 강의리스트   	| /mypage/registeredclass 	|
|            	| 강의등록     	| /mypage/registerclass   	|