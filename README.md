# 💵 **티끌모아 태산! tickle +** 💵

## ✨ 배포사이트

- 🔗 [tickle plus](https://tickleplus.netlify.app)

- 테스트 계정
  - Id : `admin@naver.com`
  - Password : `admin123!`

<br />

## 🌱 프로젝트 소개

[개요]

- 예/적금 상품을 소개하고 개별상품에 대해 검색 · 신청 · 관심상품등록을 할 수 있습니다.
- 회원가입을 진행한 유저를 대상으로 선호상품(예/적금), 주거래은행, 직업에 대한 설문조사를 권유하고 응답한 유저에게는 설문응답을 기반으로 예적금상품을 추천합니다.

[개발 기간]

- <p>2023. 2. 13 ~ 2022. 2. 24.</p>

[링크]

- [레포](https://github.com/Financial-Instruments-Mini/fe-repo)
- [팀 노션](https://www.notion.so/5-b78c446818d744e38f0983f81a74221f)
- [피그마](https://www.figma.com/file/T6poCvqRrMqOYlNpXlCqWe/tickle?node-id=0%3A1&t=E9n8uf9iSByz7XMB-0) (디자인 레퍼런스 : 피클플러스)

## 👩‍💻 팀원 소개(프론트엔드)

<table>
  <tbody>
  <tr>
  <td align="center">강해경</td>
  <td align="center">김혜인</td>
  <td align="center">최지환</td>
  <td align="center">김지영</td>
 </tr>
    <tr>
  <td align="center"><a href="https://github.com/hae9"><img src="https://avatars.githubusercontent.com/u/108416023?v=4" width="150px;" /></a></td>
  <td align="center"><a href="https://github.com/Hyeeeein"><img src="https://avatars.githubusercontent.com/u/103119275?v=4" width="150px;" /></a></td>
  <td align="center"><a href="https://github.com/hwanky"><img src="https://avatars.githubusercontent.com/u/48482406?v=4" width="150px;" /></a></td>
  <td align="center"><a href="https://github.com/dreamchach"><img src="https://avatars.githubusercontent.com/u/114228865?v=4" width="150px;" /></a></td>
  </tr>
  </tbody>
</table>

## ⚙ 기술 스택

<div>
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black">
<img src="https://img.shields.io/badge/react router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white">
<img src="https://img.shields.io/badge/react hook form-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white">
<img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/react query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white">
<img src="https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white">
<img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white">
<img src="https://img.shields.io/badge/tailwind css-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white">
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
<img src="https://img.shields.io/badge/netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white">
<img src="https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black">
<img src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white">
<br /><br />
</div>

<br/>

## 📌 작업영역 및 구현 기능 설명

<br/>

<b>강해경</b>

- 홈
  - 일부 상품에 대한 자동 슬라이드 구현
  - 전체 상품에 대한 무한스크롤 기능(더보기 버튼) 구현, 키워드별 상품 출력, 상품데이터 캐싱
- 추천상품 페이지
  - 로그인된 유저에 대한 추천상품 출력
  - 추천상품이 없거나 다른 상품을 추천받고 싶은 경우 설문 재참여 유도
- 검색 페이지
  - 백엔드에서 검색어, 정렬에 따른 검색결과 출력(은행, 상품종류로 필터링 가능), 검색어별 상품 데이터 캐싱
  - 추천검색어를 활용한 검색기능 활용 유도
- 헤더, 네브바
  - 모든 화면에서 메인 기능을 수행하는 페이지로 이동할 수 있도록 헤더와 네브바 구성

<b>김혜인</b>

- 로그인
  - 유효성 검사
  - 로그인 상태, 유저 정보 전역 상태 관리
  - ProtectedRoute 로 경로 보호
  - accessToken, refreshToken 관리
- 회원가입
  - 유효성 검사
- (미완)설문조사
  - 회원가입 이후 즉시 선택 가능하도록 설정(API 오류로 구현X)

<b>최지환</b>

- 상세 페이지
  - 상품 클릭 시 해당 상품의 상세 페이지로 이동
  - 관심 상품 등록 / 해제 (로그인 시 가능)
  - 상품 신청(로그인 시 가능) / 이미 신청한 상품 예외처리
- 관심 상품 페이지
  - 신청한 관심 상품 리스트업
  - 삭제 / 전체삭제 기능

<b>김지영</b>

- 마이페이지
  - 내 정보 보기
    - 내 정보 확인
    - 내 정보 수정 (수정 시 비밀번호 필요/ 비밀번호와 전화번호를 잘못입력할 시 경고창 발생)
  - 신청한 상품 보기
    - 신청한 상품 획인(필터링 가능(은행별, 예적금별))
    - 신청한 상품 취소 가능

<br/>

## 💦 어려웠던 점 & 아쉬운 점

- 백엔드 측 서버가 준비되는데 생각보다 시간이 많이 소요되어 프론트엔드 기능 구현을 하는 시간이 촉박했습니다.
- 백엔드에 대한 이해가 부족하다보니 소통을 하는 데에 어려움이 있었습니다.
- 서버측 에러에 대한 이해도가 부족하고 try&catch문 활용이 제대로 이루어지지 않아 아쉽습니다.
- 정기적인 진행상황 회의나 규칙적인 pr이 이루어지지 않아 소통과 통일성있는 코드작성에 어려움이 있었습니다.
- 타입스크립트로 진행하면서 타입에러를 해결하고, 함께 사용하는 데이터 타입에 대해 예외가 생기는 경우를 처리하는 것이 어려웠습니다.

<br/><br/>

## 💡 질문사항 및 미해결 에러

#### ERR_CONNECTION_REFUSED 에러

![](src/assets/images/README_error.png)

- 갑자기 다른 프론트엔드 팀원들과는 달리 혼자만 콘솔에 해당 에러가 뜨면서 모든 api 호출을 되지 않습니다. 프록시 설정도 해주고, 브라우저 캐시도 삭제해주고, 재부팅도 해주고, 방화벽도 꺼보는 등 방법을 써봤지만 되지 않았습니다. 간간히 다시 api 호출이 정상적으로 되어서 작업을 하다보면 금방 해당 오류를 띄웁니다.

#### 타입스크립트 관련

- 타입스크립트로 협업을 진행해보니 각자 유사하면서도 조금씩 다른 데이터의 타입을 선언하면서 코드를 작성하게 되던데, 타입에 대한 선언이 중복없이 깔끔하게 작성되면서도 모두 활용하기 좋게하는 방법이 있을까요 ?
