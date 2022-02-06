<template>
  <div
    class="container">
    <Headline />
  </div>
  <section>
    <h2>
      SERVICES
    </h2>
    <h4>순위조회, 가격변동, 송장변환</h4>	
    <br />
    <div
      class="section-box"
      data-aos="fade-up"
      data-aos-duration="1300">
      <div>
        <a href="r_realrank.php">
          <div class="col-sm-4">
            <span class="glyphicon glyphicon-sort icon"></span>
            <h4><strong>스마트스토어 순위조회</strong></h4>
            <p>스마트스토어 실시간 <strong>순위검색 조회</strong></p>
          </div>
        </a>	
      </div>
      
      <a href="m_monitoring.php">  
        <div class="col-sm-4">
          <span class="glyphicon glyphicon-zoom-in icon"></span>
          <h4><strong>가격변동 자동 모니터링</strong></h4>
          <p>그룹별 실시간 <strong>가격조회</strong>, 가격변동시 실시간 <strong>문자 알림</strong></p>
        </div>
      </a>	

      <a href="change.php">  	  
        <div class="col-sm-4">
          <span class="glyphicon glyphicon-repeat icon"></span> 
          <h4><strong>모바일 자동 송장변환</strong></h4>
          <p>택배사 <strong>송장 변환</strong>, 업체별 분류, <strong>제품별</strong> 분류</p>			
        </div>
      </a>
    </div>    
  </section>
  <Footer />
</template>

<script>
import Headline from '~/components/Headline'
import Footer from '~/components/Footer'

export default {
  components: {
    Headline,
    Footer
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  text-align: center;
  background-image: url('/src/assets/main.png');
  padding: 80px 25px;
  margin-bottom: 30px;
}
section {
  display: flow-root;
  padding: 60px 50px;
  text-align: center;
  h2 {
    font-size: 24px;
    text-transform: uppercase;
    color: #303030;
    font-weight: 600;
    margin-bottom: 30px;
    margin-top: 20px;
    &:after {
        content: "";
        display: block;
        width: 60px;
        border-bottom: 1px solid #bcbcbc;
        margin: 20px auto;
    }
  }
  h4 {
    font-size: 19px;
    line-height: 1.375em;
    color: #303030;
    font-weight: 400;
    margin-bottom: 30px;
    margin-top: 10px;
  }
  .section-box {
    visibility: visible;
    .icon {
      font-size: 50px;
      color: deepskyblue;
    }

    p {
      color: #337ab7
    }
  }
}
</style>