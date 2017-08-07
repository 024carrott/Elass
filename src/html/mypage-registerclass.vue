<template lang="pug">
    main
      .container.register-class-container.mt-1
        .grid.mt-3
          .register-class-header.col.col-d-4.col-d-push-4
            h1 강의 등록 하기
        .grid.mt-2
          .col.alpha.omega
              h2 강의 일반 정보
          form.register-lecture-form.col.col-d-8.col-d-push-2
            fieldset
              legend.a11y-hidden 강의 등록하기 폼
              //- 강의제목
              label(for="lecture-title").col.alpha 강의 제목
              input(id="lecture-title" class="lecture-title" name="lecture-title" type="text" placeholder="강의 제목을 입력 해 주세요.").col.alpha
              //- 강의장소
              label(for="lecture-place").col.alpha 강의 장소
              input(id="lecture-place" class="lecture-place" name="lecture-place" type="text" placeholder="강의 장소를 입력 해 주세요.").col.alpha
              //- 강의 일시
              span(class="lecture-date").col.alpha 강의 일시
              //- 강의시작년도
              label(for="lecture-year").a11y-hidden 강의 시작년도
              input(id="lecture-year" class="lecture-year" name="lecture-year" type="text").col.col-d-2.col-t-7.col-m-3
              span(class="lecture-text").col.col-d-1.col-t-1.col-m-1 년
              //- 강의시작월
              label(for="lecture-month").a11y-hidden 강의 시작월
              select(id="lecture-month" class="lecture-month" name="lecture-month").col.col-d-1.col-t-7.col-m-3
                option(value="0" selected disabled) 선택
                option(value="1") 1
                option(value="2") 2
                option(value="3") 3
                option(value="4") 4
                option(value="5") 5
                option(value="6") 6
                option(value="1") 7
                option(value="2") 8
                option(value="3") 9
                option(value="4") 10
                option(value="5") 11
                option(value="6") 12
              span(class="lecture-text").col.col-d-1.col-t-1.col-m-1 월
              //- 강의시작일
              label(for="lecture-day").a11y-hidden 강의 시작일
              input(id="lecture-day" class="lecture-day" name="lecture-day" type="text").col.col-d-1.col-t-7.col-m-3
              span(class="lecture-text").col.col-d-1.col-t-1.col-m-1 일
              //- 강의시간
              label(for="lecture-time").col.alpha 강의 시간
              input(id="lecture-time" class="lecture-time" name="lecture-time" type="text" placeholder="강의 시간을 입력 해 주세요.").col.col-d-6
              //- 모집인원
              label(for="lecture-member").col.alpha 모집 인원
              input(id="lecture-member" class="lecture-member" name="lecture-member" type="text").col.col-d-2.col-t-7.col-m-3
              span(class="lecture-text").col.col-d-1.col-t-1.col-m-1 명
              //- 수강료
              label(for="lecture-price").col.alpha 수강료
              input(id="lecture-price" class="lecture-price" name="lecture-price" type="text").col.col-d-2.col-t-7.col-m-3
              span(class="lecture-text").col.col-d-1.col-t-1.col-m-1 원
              //- 강의 상세 정보
              .col.mt-2.alpha.omega
                h2 강의 상세 정보
                //- 대표이미지
                //- 등록되었을 때
                label(for="lecture-image").col.alpha 대표 이미지
                .col.alpha.lecture-image-uploaded
                  a(href role="button" aria-label="현재 업로드된 사진 삭제하기")
                    span.ion-close-circled.image-delete-btn
                  img(src="../assets/mypage/mypage-test.jpeg" alt="첫 번째 이미지")
                //- 등록 안되었을때
                .col.alpha.lecture-image-container
                  input(id="lecture-image" class="lecture-image" name="lecture-image" type="file").col.col-d-12
                  .fake-file-upload.col.col-d-12.alpha.omega
                    input(placeholder="이미지를 업로드 하려면 여기를 클릭 하세요." disabled).col.col-d-12.alpha
                .col.alpha.lecture-image-container
                  input(id="lecture-image" class="lecture-image" name="lecture-image" type="file").col.col-d-12
                  .fake-file-upload.col.col-d-12.alpha.omega
                    input(placeholder="이미지를 업로드 하려면 여기를 클릭 하세요." disabled).col.col-d-12.alpha
                .col.alpha.lecture-image-container
                  input(id="lecture-image" class="lecture-image" name="lecture-image" type="file").col.col-d-12
                  .fake-file-upload.col.col-d-12.alpha.omega
                    input(placeholder="이미지를 업로드 하려면 여기를 클릭 하세요." disabled).col.col-d-12.alpha
                .col.alpha.lecture-image-container
                  input(id="lecture-image" class="lecture-image" name="lecture-image" type="file").col.col-d-12
                  .fake-file-upload.col.col-d-12.alpha.omega
                    input(placeholder="이미지를 업로드 하려면 여기를 클릭 하세요." disabled).col.col-d-12.alpha
              //- 튜터 정보
              .col.mt-2.alpha.omega
                h2 튜터 소개
                label(for="career").col.alpha 경력 사항
                input(id="career" class="career" name="career" type="text" placeholder="경력 사항을 입력 해 주세요.").col.col-d-10.col-t-7.col-m-3
                button(class="add-career-btn" aria-label="경력 사항 입력 칸 추가하기").col.col-d-2.col-t-1.col-m-1 추가
                input(id="career" class="career" name="career" type="text" placeholder="경력 사항을 입력 해 주세요.").col.col-d-10.col-t-7.col-m-3
                button(class="delete-career-btn" aria-label="경력 사항 입력 칸 삭제하기").col.col-d-2.col-t-1.col-m-1 삭제
                input(id="career" class="career" name="career" type="text" placeholder="경력 사항을 입력 해 주세요.").col.col-d-10.col-t-7.col-m-3
                button(class="delete-career-btn" aria-label="경력 사항 입력 칸 삭제하기").col.col-d-2.col-t-1.col-m-1 삭제
                label(for="introduce").col.alpha 자기 소개
                input(id="introduce" class="introduce" name="introduce" type="textarea" placeholder="자기 소개를 입력 해 주세요.").col.col-d-12

            input(type="submit" value="강의 등록").col.col-d-2.col-d-offset-5
            button(type="button").col.col-d-1.col-d-push-4 취소
          //- form.register-lecture-form.col.col-d-8.col-d-push-2 
</template>


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
  }

  .lecture-text{
    font-size: 1.6rem;
    margin-top: $leading;
  }
  
  .lecture-year,
  .lecture-day{
    text-align: center;
  }

  .lecture-month{
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
  }
  .add-career-btn{
    border: 1px solid #007aff;
    color: #007aff;
  }
  .delete-career-btn{
    border: 1px solid #db0101;
    color: #db0101;
  }

  input.introduce{
    height: $leading * 10;
  }
  
  input[type="submit"]{
    margin-top: $leading;
    border: none;
    padding: 0;
    background: #007aff;
    color: #fff;
    cursor: pointer;
  }

  button[type="button"]{
    padding: 0;
    margin-top: $leading;
    line-height: $leading * 2;
    border: 1px solid #db0101;
    color: #db0101;
    background: #fff;
    font-size: 1.6rem;
  }
  

</style>
