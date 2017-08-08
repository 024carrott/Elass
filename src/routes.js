import Main from './components/Main/Main';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import LectureList from './components/Lecture/LectureList';
import LectureDetail from './components/Lecture/LectureDetail';
import MyPage from './components/MyPage/MyPage';
import MyLectureList from './components/MyPage/MyLectureList';
import MyFavoriteList from './components/MyPage/MyFavoriteList';
import RegisteredClass from './components/MyPage/RegisteredClass';
import RegisterClass from './components/MyPage/RegisterClass';


const routes = [
  { path: '/',                       component: Main },         // 홈
  { path: '/signup',                 component: SignUp },       // 회원가입
  { path: '/signin',                 component: SignIn },       // 로그인
  { path: '/lecturelist',               component: LectureList },         // 강의 리스트 페이지
  { path: '/lecturedetail',             component: LectureDetail },         // 강의 상세 페이지
  { path: '/mypage',                 component: MyPage,},       // 마이 페이지
  { path: '/mypage/mylecturelist',          component: MyLectureList },      // 내가 수강한 강의 리스트
  { path: '/mypage/myfavoritelist',    component: MyFavoriteList },   // 내가 찜한 강의 리스트
  { path: '/mypage/registeredclass', component: RegisteredClass }, // 내가 등록한 강의 리스트
  { path: '/mypage/registerclass',   component: RegisterClass },     // 강의 등록하기 페이지
]; 
export default routes;