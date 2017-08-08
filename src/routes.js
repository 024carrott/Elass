import Main from './components/Main/Main';
import SignUp from './html/SignUp';
import SignUpComplete from './html/SignUpComplete';
import SignIn from './html/SignIn';
import List from './html/list';
import View from './html/view';
import Mypage from './html/mypage';
import RegClass from './html/mypage-registerclass';
import EntrollClass from './html/mypage-enrolled';
import LikedClass from './html/mypage-liked';
import MyClass from './html/mypage-history';

const routes = [
  { path: '/', component: Main },  // 홈
  { path: '/signup', component: SignUp }, // 회원가입
  { path: '/signin', component: SignIn }, // 로그인
  { path: '/list/:id', component: List },// 강의 리스트 페이지
  { path: '/detail/:id', component: View }, // 강의 상세 페이지
  { path: '/mypage', component: Mypage,},  
  { path: '/mypage/mylist', component: MyClass }, // 내가 수강한 강의 리스트
  { path: '/mypage/favoritelist', component: LikedClass }, // 내가 찜한 강의 리스트
  { path: '/mypage/registeredclass', component: EntrollClass }, // 내가 등록한 강의 리스트
  { path: '/mypage/registerclass', component: RegClass }, // 강의 등록하기 페이지

]; 

export default routes;