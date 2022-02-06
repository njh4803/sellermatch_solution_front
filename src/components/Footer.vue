<template>
  <footer>
    <p class="height_10"></p>	
    <div>
      <h2 class="text-center">
        CONTACT
      </h2>
      <p class="height_30"></p>		
      <div class="row">
        <div class="col-sm-5">
          <p>회사명 : 위셀글로벌 주식회사</p>
          <p>서울사무실: 서울시 강남구 언주로 147길 43, Sellermatch(호성빌딩,1층)</p>
          <p>인천사무실: 인천시 연수구 컨벤시아대로 204, 인천 스타트업파크 인스타1 515호</p>
          <p>대표이사 : 송진일</p>		
          <p>개인정보책임관리자 : 정윤용</p>
          <p>사업자등록번호 : 181-87-01992</p>		
          <p>통신판매업신고 : 2020-인천연수구-1558</p>	
          <p>연락처 : 02-515-0923</p>			
          <p>호스팅 서비스 제공 : cafe24 호스팅 (https://www.cafe24.com/)</p>				
        </div>
        <div
          class="col-sm-7"
          data-aos="fade-up"
          data-aos-duration="1300">
          <div class="row">
            <div class="col-sm-6 form-group">
              <input
                class="form-control"
                id="name"
                name="name"
                placeholder="Name"
                type="text"
                required />
            </div>
            <div class="col-sm-6 form-group">
              <input
                class="form-control"
                id="email"
                name="email"
                placeholder="Email"
                type="email"
                required />
            </div>
          </div>
          <textarea
            class="form-control"
            id="comments"
            name="comments"
            placeholder="Comment"
            rows="5"></textarea><br />
          <div class="row">
            <div class="col-sm-12 form-group">
              <Button
                class="pull-right">
                Send
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>		   
  </footer>
</template>

<script>
import aos from 'aos'
import Button from '~/components/Button'

export default {
  components: {
    Button
  },
  created() {
    aos.init()
  }
}
</script>

<style lang="scss" scoped>
footer {
  font-size: 15px;
  color: #818181;
  padding: 60px 50px;
  background-color: #f6f6f6;

  h2 {
    font-size: 24px;
    text-transform: uppercase;
    color: #303030;
    font-weight: 600;
    margin-bottom: 30px;
    margin-top: 20px;
    text-align: center;
    &:after {
      content: "";
      display: block;
      width: 60px;
      border-bottom: 1px solid #bcbcbc;
      margin: 20px auto;
    }
  }
  .form-control {
    display: block;
    width: 100%;
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
  }
  textarea {
    &.form-control {
      height: auto;
      overflow: auto;
    }
  }
}
</style>