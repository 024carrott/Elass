<template lang="pug">
    main
      .container.register-class-container.mt-1
        .grid.mt-3
          .register-class-header.col.col-d-4.col-d-push-4
            h2 강의 등록 하기
        .grid.mt-2
          .col.alpha.omega
              h3.register-subtitle 강의 일반 정보
          form.register-lecture-form.col.col-d-8.col-d-push-2
            fieldset
              legend.a11y-hidden 강의 등록하기 폼
              //- 강의제목
              label(for="lecture-title").col.alpha 강의 제목
              input(id="lecture-title" v-model="title" class="lecture-title" name="lecture-title" type="text" placeholder="강의 제목을 입력 해 주세요.").col.alpha
              //- 카테고리
              label(for="lecture-category").col.alpha 카테고리
              select(id="lecture-category" v-model="category" class="lecture-category" name="lecture-category").col.col-d-1.col-t-7.col-m-3
                option(value="" selected disabled) 선택
                option(value="hbn") 헬스&amp;뷰티
                option(value="lang") 외국어
                option(value="com") 컴퓨터
                option(value="mna") 음악 / 미술
                option(value="sports") 스포츠
                option(value="major") 전공 / 취업
                option(value="hobby") 이색취미
              //- 대표이미지
              //- 등록되었을 때
              label(for="lecture-image").col.alpha 대표 이미지
              .col.alpha.lecture-image-uploaded(v-if="coverImg")
                //- a(href role="button" aria-label="현재 업로드된 사진 삭제하기")
                //-   span.ion-close-circled.image-delete-btn
                img(:src="coverImg" alt="강의 대표 이미지")
              //- 등록 안되었을때
              .col.alpha.lecture-image-container
                input(id="lecture-image" class="lecture-image" name="lecture-image" @change="addCover" type="file").col.col-d-12
                .fake-file-upload.col.col-d-12.alpha.omega
                  input(placeholder="이미지를 업로드 하려면 여기를 클릭 하세요." disabled).col.col-d-12.alpha
              //- 강의장소
              label(for="lecture-place1").col.alpha 강의 장소
              input(id="lecture-place1" class="lecture-place" v-model="location1" name="lecture-place1" type="text" placeholder="시/도(서울)" maxlength="10").col.alpha.col-d-6.col-t-4.col-m-2
              label(for="lecture-place2").a11y-hidden
              input(id="lecture-place2" class="lecture-place" v-model="location2" name="lecture-place2" type="text" placeholder="구/군(서초구)" maxlength="10").col.omega.col-d-6.col-t-4.col-m-2
              label(for="lecture-place3").a11y-hidden
              input(id="lecture-place3" class="lecture-place" v-model="location3" name="lecture-place3" type="text" placeholder="상세주소(서초동 120-2)" maxlength="100").col.alpha
              //- 강의시작년도
              label(for="lecture-date").col.alpha 강의요일
              select(id="lecture-date" v-model="strDate" class="lecture-category" name="lecture-date").col.col-d-1.col-t-7.col-m-3
                option(value="mon") 월요일
                option(value="tue") 화요일
                option(value="wed") 수요일
                option(value="thu") 목요일
                option(value="fri") 금요일
                option(value="sat") 토요일
                option(value="sun") 일요일
              //- 강의시간
              label(for="lecture-time").col.alpha 강의 시간
              input(id="lecture-time" class="lecture-time" name="lecture-time" v-model="strTime" type="text" placeholder="10 ~ 12").col.col-d-6
              //- 모집인원
              label(for="lecture-member").col.alpha 모집 인원
              input(id="lecture-member" class="lecture-member" name="lecture-member" v-model="memberCnt" type="number" value="1").col.col-d-2.col-t-7.col-m-3
              span(class="lecture-text").col.col-d-1.col-t-1.col-m-1 명
              //- 수강료
              label(for="lecture-price").col.alpha 수강료
              input(id="lecture-price" class="lecture-price" name="lecture-price" v-model="price" type="number" value="30000").col.col-d-2.col-t-7.col-m-3
              span(class="lecture-text").col.col-d-1.col-t-1.col-m-1 원
              
              //- 강의 상세 정보
              h3.register-subtitle.col.mt-1 강의 상세 정보
              //- 튜터 정보
              .col.mt-2.alpha.omega
                //- h3.register-subtitle 튜터 소개
                //- label(for="career-1").col.alpha 경력 사항
                //- input(id="career-1" class="career" name="career" type="text" placeholder="경력 사항을 입력 해 주세요.").col.col-d-10.col-t-7.col-m-3
                //- .col.col-d-2.col-t-1.col-m-1.omega
                //-   button(class="add-career-btn" aria-label="경력 사항 입력 칸 추가하기") 추가
                //- input(id="career-2" class="career" name="career" type="text" placeholder="경력 사항을 입력 해 주세요.").col.col-d-10.col-t-7.col-m-3
                //- .col.col-d-2.col-t-1.col-m-1.omega
                //-   button(class="delete-career-btn" aria-label="경력 사항 입력 칸 삭제하기").col.col-d-2.col-t-1.col-m-1 삭제
                label(for="tutor-info").col.alpha 튜터소개
                textarea(id="tutor-info" class="introduce" v-model="tutorInfo" placeholder="튜터 소개를 입력 해주세요.").col.col-d-12
                label(for="class-info").col.alpha 강의소개
                textarea(id="class-info" class="introduce" v-model="classInfo" placeholder="강의 소개를 입력 해주세요.").col.col-d-12
                label(for="target-info").col.alpha 수강 대상
                textarea(id="target-info" class="introduce" v-model="targetInfo" placeholder="수강대상을 입력 해주세요.").col.col-d-12
              .col.mt-2.alpha.omega
                label(for="lecture-images") 상세 이미지({{ imgCnt }}개)
              .col.alpha.lecture-image-container
                input(id="lecture-images" multiple name="lecture-images" type="file" @change="addFiles").col.col-d-12
            input(type="submit" value="강의 등록" @click.prevent="makeClass").col.col-d-2.col-d-offset-5
            button(type="reset").col.col-d-1.col-d-push-4 취소
</template>

<script>
export default {
  created(){
    this.classFrm = new FormData();
  },
  data(){
    return {
      classFrm:'',
      title:'에프터이펙트를 활용한 모션그래픽+프로젝션 맵핑(VJ)을 배워 봅시다~',
      category:'com',
      coverImg:'',
      cover:'',
      location1:'서울',
      location2:'강남',
      location3:'역삼동',
      strDate:'mon',
      strTime:'10~12',
      memberCnt:'1',
      price:'20000',
      photo:'',
      imgCnt: 0,
      type: 'info',
      classInfo:"♦︎ 제 수업은 프로젝션맵핑의(VJ) 기본적인 이해와 실습을 하고 모션그래픽디자인의 심화와 기초를 \n배울 수 있습니다.\n\n(a코스) 모션그래픽(중급-심화)\n\n(b코스)모션그래픽(기초)+프로젝션맵핑(vj)\n\n♦︎ 알려드릴 수 있는 툴은 포토샵,일러스트,에프터이펙트,시네마포디,Vdmx,Mad mapper등등 입니다.\n\n♦︎ 누구나 쉽게 배울 수 있도록 최선을 다해 알려드리겠습니다.\n\n♦︎ 4주 동안 수업 신청하신 분과 상담을 통해 수업을 진행하겠습니다.\n\n♦︎ 프로그램은 직접 설치해오셔도 좋고 제가 직접 공유해드릴 수 있습니다.\n\n♦︎ 수업 장소는 홍대,강남에서 진행합니다. 자세한 장소는 서로 조율해 보아요\n\n\n\n♦︎준비물\n\n\n노트북(맥북). 프로젝션맵핑(vj) 툴은 맥에서만 작동 합니다. 윈도우는 다른 툴로 가능.(협의)",
      targetInfo:"-모션그래픽에 대해 알고 싶고 잘하고 싶으신 분\n\n-에프터이펙트 초보자\n\n-프로젝션맵핑(vj)에 대해 알고 싶으신 분\n\n-디자인을 잘 하고 싶으신 분\n\n-미디어아트에 대해 궁금하신 분\n\n-모션그래픽 포트폴리오 필요하신 분",
      tutorInfo:"-GATSBY DANCE COMPETITION VJ @ 압구정 예홀\n\n-전자음악심포지엄 VJ @ 서울대학교\n\n-제네럴아이디어패션쇼VJ \n\n-1STF.ARTY NIGHT FOEA-MARKET VJ @ CLUB ABLE\n\n-WORLD DJ FESTIVAL FREE PARTY VJ 2013\n\n-CLUB OCTAGON RESIDENT VJ \n\n-CLUB ELLUI VJ \n\n-LOTTE HOTEL WORLD SPRING CONCERT VJ @ 롯데호텔\n\n-넥슨,삼성,kt,현대자동차 등등 대기업 광고 영상 제작.\n\n\n현) 디자인 스튜디오 모션그래픽 디자이너.\n\n\n♦︎ 저는 2년여간 클럽과 콘서트등을 위주로 vj 활동을 하였습니다.\n\n그리고 현재는 디자인 스튜디오에서 모션그래픽디자이너로 활동하고 있습니다.\n\n\nhttps://vimeo.com/zeroone012",
    }
  },
  methods:{
    addCover(e){
      if (e.target.files[0]){
        this.cover = e.target.files[0];
        let reader = new FileReader();
        reader.readAsDataURL(this.cover);
        reader.onload = ()=>{
          this.coverImg = reader.result;
        }
      }
      // this.coverImg = e.target.files[0].path;
    },
    addFiles(e){
      this.imgCnt = e.target.files.length;
    },
    makeClass(){
      if(!this.title.length){
        window.alert('강의 제목을 입력하세요');
        document.getElementById("lecture-title").focus();
        return;
      }
      if(!this.category.length){
        window.alert('강의 카테고리를 선택하세요');
        document.getElementById("lecture-category").focus();
        return;
      }
      if(!this.coverImg.length){
        window.alert('강의 대표 이미지를 등록하세요');
        document.getElementById("lecture-image").focus();
        return;
      }
      if(!this.location1.length){
        window.alert('강의 장소를 등록하세요');
        document.getElementById("lecture-place1").focus();
        return;
      }
      if(!this.location2.length){
        window.alert('강의 장소를 등록하세요');
        document.getElementById("lecture-place2").focus();
        return;
      }
      if(!this.strDate.length){
        window.alert('강의 요일을 선택하세요');
        document.getElementById("lecture-date").focus();
        return;
      }
      if(!this.memberCnt){
        window.alert('강의 인원 수를 입력하세요');
        document.getElementById("lecture-member").focus();
        return;
      }
      if(confirm("입력하신 내용으로 등록 하시겠습니까?")){
        this.makeForm();
      }
    },
    makeForm(){
      this.classFrm.append('title', this.title);
      this.classFrm.append('category', this.category);
      this.classFrm.append('class_type', 'group');
      this.classFrm.append('min_member', this.memberCnt);
      this.classFrm.append('max_member', this.memberCnt);
      this.classFrm.append('cover_photo', this.cover, this.cover.name);
      this.classFrm.append('tutor_intro', this.tutorInfo);
      this.classFrm.append('class_intro', this.classInfo);
      this.classFrm.append('target_intro', this.targetInfo);
      this.classFrm.append('price', this.price);
      this.classFrm.append('location1', this.location1);
      this.classFrm.append('location2', this.location2);
      this.classFrm.append('location_detail', this.location3); 
      this.classFrm.append('class_weekday', this.strDate); 
      this.classFrm.append('class_time', this.strTime); 
      this.classFrm.append('state', 'activity'); 
      this.sendFrm();
    },
    sendFrm(){
      this.$http.post(this.$store.state.lecture.regist, this.classFrm, {headers:{Authorization:this.$store.getters.token}})
      .then(response => {
        console.log('강의생성 성공', response);
        return;
        if(response.status === 201){
          this.$router.push('/signin');
        }
      })
      .catch(error => {
        console.log('강의생성 실패', error);
        switch(error.status){
          case 400:
            window.alert('회원가입이 불가 합니다.')
            break;
        }
      });
    }
  },
  computed:{

  }
}
</script>



<style lang="scss" scoped>
  @import "~default";
  %border-top{
    border-top: 1px solid #bbc0d4;
  }
  %border{
    border: 1px solid #bbc0d4;
  }

  .register-class-container{
    @extend %border-top;
    margin-bottom: $leading * 4;
    .register-class-header{
      text-align: center;
    }
    label,
    .lecture-date{
      font-size: 1.6rem;
      margin-top: $leading;
    }
    input{
      @extend %border;
      font-size: 1.6rem;
      margin-top: $leading / 2;
      line-height: $leading * 2;
      padding: 0 0 0 5px;
    }
    .register-subtitle{
      text-align: center;
      font-weight: lighter;
      @extend %border-top;
      padding-top: 15px;
    }
  }

  .lecture-text{
    font-size: 1.6rem;
    margin-top: $leading;
  }
  
  .lecture-year,
  .lecture-day{
    text-align: center;
  }

  .lecture-month, .lecture-category{
    -webkit-border-radius: 0;
    -webkit-appearance: none;
    @extend %border;
    font-size: 1.6rem;
    margin-top: $leading / 2;
    height: $leading * 2;
    background: #fff;
  }

  .lecture-image-container{
    position: relative;
    padding: 0;
  }

  input.lecture-image{
    position: relative;
    opacity: 0;
    z-index: 2;
    padding: 0;
    cursor: pointer;
  }

  .fake-file-upload{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    & > input{
      text-align: center;
      border: 1px solid #007aff;
      &::placeholder{
        color: #007aff;
      }
    }
  }

  .lecture-image-uploaded{
    margin-top: $leading / 2;
    padding: 0;
    position: relative;
    .image-delete-btn{
      position: absolute;
      color: #db0101;
      font-size: 3.0rem;
      top: 0;
      right: 5px;
    }
    img{
      max-width: 100%;
      display: block;
      margin: 0 auto;
    }
  }

  .add-career-btn,
  .delete-career-btn{
    margin-top: $leading / 2;
    line-height: $leading * 2;
    background: #fff;
    padding: 0;
    font-size: 1.4rem;
    width: 100%;
  }
  .add-career-btn{
    border: 1px solid #007aff;
    color: #007aff;
  }
  .delete-career-btn{
    border: 1px solid #db0101;
    color: #db0101;
  }

  textarea.introduce{
    @extend %border;
    height: $leading * 10;
    margin-top: $leading / 2;
    font-size: 1.6rem;
    padding-top: 5px;
    -webkit-appearance: none;
    -moz-appearance: none;
    &::placeholder{
      font-size: 1.6rem;
    }
  }
  
  input[type="submit"]{
    margin-top: $leading;
    border: none;
    padding: 0;
    background: #007aff;
    color: #fff;
    cursor: pointer;
  }

  button[type="reset"]{
    padding: 0;
    margin-top: $leading;
    line-height: $leading * 2;
    border: 1px solid #db0101;
    color: #db0101;
    background: #fff;
    font-size: 1.6rem;
  }
  
</style>
