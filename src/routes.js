import Main from './html/Main';
import SignUp from './html/SignUp';
import SignUpComplete from './html/SignUpComplete';
import SignIn from './html/SignIn';
import List from './html/list';
import View from './html/view';
import Mypage from './html/mypage';

const routes = [
  { path: '/', component: Main },  // 홈
  { path: '/signup', component: SignUp }, // 회원가입
  { path: '/signin', component: SignIn }, // 로그인
  { path: '/list/:id', component: List },// 강의 리스트 페이지
  { path: '/detail/:id', component: View }, // 강의 상세 페이지
  { path: '/mypage', component: Mypage, 
    // children: [
    //   { path: 'modify', component: Modify },  // 내 정보 수정하기
    //   { path: 'mylist', component: MyLectureList }, // 내가 수강한 강의 리스트
    //   { path: 'favoritelist', component: MyFavoriteList }, // 내가 찜한 강의 리스트
    //   { path: 'registertutor', component: RegisterTutor }, // 튜터 등록하기
    //   { path: 'registeredclass', component: RegisteredClass }, // 내가 등록한 강의 리스트
    //   { path: 'registerclass', component: RegisterClass }, // 강의 등록하기 페이지
    // ]
  },
]; 

export default routes;