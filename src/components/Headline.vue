<template>
  <span><h1>셀러매치 솔루션 ver1.0</h1></span><br />
  <br />
  <span><h3>아래 3가지 서비스 이용이 가능합니다.</h3></span><br />
  <span><h3>스마트스토어 순위조회,</h3></span><br />
  <span><h3>가격변동 자동 모니터링,</h3></span><br />
  <span><h3>모바일 자동 송장변화</h3></span><br />
  <Button
    font-size="18"
    border-none>
    <i class="glyphicon glyphicon-share"></i>
    친구들과 공유하기
  </Button>
</template>

<script>
import Button from '~/components/Button'
import aos from 'aos'

export default {
  components: {
    Button
  },
  created() {
    aos.init()
  }
}
</script>

<style>

</style>

<style lang="scss" scoped>  
  .container {
    span {
      display: inline-block;
      color: white;
      margin-top: 10px;
      line-height: 1.1;
      font-size: 24px;
      font-weight: 500;
      h1 {
        font-size: 63px;
        margin-bottom: 30px;
      }
      h3 {
        font-size: 24px;
      }
    }

    .glyphicon {
      position: relative;
      top: 1px;
      display: inline-block;
      font-family: "Glyphicons Halflings";
      font-style: normal;
      font-weight: 400;
      line-height: 1;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    .glyphicon-share{
      &::before {
        content: '\e066';
      }
    }
    button {
      margin-top: 80px;
    }
  }
</style>