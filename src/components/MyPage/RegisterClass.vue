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
              select(id="lecture-category" v-model="category" class="lecture-category" name="lecture-category").col.col-d-4.col-t-7.col-m-3
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
              .lecture-date.col.alpha 강의요일
              //- select(id="lecture-date" v-model="strDate" class="lecture-category" name="lecture-date")
              .col
                .chk-wrap
                  input(type="checkbox" name="lecture-date" id="lecture-date0" v-model="strDate" value="mon")
                  label(for="lecture-date0").select-date 월
                .chk-wrap
                  input(type="checkbox" name="lecture-date" id="lecture-date1" v-model="strDate" value="tue")
                  label(for="lecture-date1").select-date 화
                .chk-wrap
                  input(type="checkbox" name="lecture-date" id="lecture-date2" v-model="strDate" value="wed")
                  label(for="lecture-date2").select-date 수
                .chk-wrap
                  input(type="checkbox" name="lecture-date" id="lecture-date3" v-model="strDate" value="thu")
                  label(for="lecture-date3").select-date 목
                .chk-wrap
                  input(type="checkbox" name="lecture-date" id="lecture-date4" v-model="strDate" value="fri")
                  label(for="lecture-date4").select-date 금
                .chk-wrap
                  input(type="checkbox" name="lecture-date" id="lecture-date5" v-model="strDate" value="sat")
                  label(for="lecture-date5").select-date 토
                .chk-wrap
                  input(type="checkbox" name="lecture-date" id="lecture-date6" v-model="strDate" value="sun")
                  label(for="lecture-date6").select-date 일
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
      classData:{},
      title:'',
      category:'',
      coverImg:'',
      cover:'',
      location:[],
      location1:'',
      location2:'',
      location3:'',
      strDate:[],
      strTime:'',
      memberCnt:'1',
      price:'',
      photos:[],
      imgCnt: 0,
      type: 'info',
      classInfo:"",
      targetInfo:"",
      tutorInfo:"",
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
      this.photos = e.target.files;
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
      this.classFrm.append('location_option', 'custom');
      this.classFrm.append('location_detail', this.location3);
      this.classFrm.append('location_etc_type', 'no');
      this.classFrm.append('location_etc_text', 'no');
      this.classFrm.append('class_weekday', this.strDate.join(','));
      this.classFrm.append('class_time', this.strTime);
      for(let i=0, l=this.photos.length; i < l; i++){
        this.classFrm.append('lecture_photo', this.photos);
      }
      // this.classFrm.append('lecture_photo[]',this.photos);
      this.sendFrm();
    },
    sendFrm(){
      this.$http.post(this.$store.state.lecture.regist, this.classFrm, {headers:{'authorization':this.$store.getters.token}})
      .then(response => {
        if(response.status === 201){
          this.$router.push('/mypage/registeredclass');
        }
      })
      .catch(error => {
        console.log('강의생성 실패', error);
        switch(error.status){
          case 400:
            window.alert('강의 생성이 불가 합니다.')
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
  
  .chk-wrap{
    position: relative;
    display: inline-block;
    width: $leading * 4;
    height: $leading * 4;
    @extend  %border;
    overflow: hidden;
    margin-right: 5px;
    input:checked+.select-date{
      background-color: #007aff;
      color: #fff;
      font-weight: bold;
    }
  }
  .select-date{
    position: absolute;
    display: block;
    z-index: 10;
    margin: 0 !important;
    line-height: $leading * 4;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #fff;
    text-align: center;
  }
</style>
