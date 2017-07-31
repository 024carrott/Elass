export const routes = [
  {
    // 홈
    path: '/',
    component: Main
  },
  {
    // 회원가입
    path: '/signup',
    component: SignUp
  },
  {
    // 로그인
    path: '/signin',
    component: SignIn
  },
  {
    // 강의 리스트 페이지
    path: '/list',
    component: LectureList
  },
  {
    // 강의 상세 페이지
    path: '/detail',
    component: LectureDetail
  },
  {
    // 마이페이지
    path: '/mypage',
    component: MyPage,
    children: [
      {
        // 내 정보 수정하기
        path: 'modify',
        component: Modify
      },
      {
        // 내가 수강한 강의 리스트
        path: 'mylist',
        component: MyLectureList
      },
      {
        // 내가 찜한 강의 리스트
        path: 'favoritelist',
        component: MyFavoriteList
      },
      {
        // 튜터 등록하기
        path: 'registertutor',
        component: RegisterTutor
      },
      {
        // 내가 등록한 강의 리스트
        path: 'registeredclass',
        component: RegisteredClass
      },
      {
        // 강의 등록하기 페이지
        path: 'registerclass',
        component: RegisterClass
      },
    ]
  },
];