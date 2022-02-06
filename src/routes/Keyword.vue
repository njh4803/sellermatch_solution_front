<template>
  <div class="container">
    <div class="line"></div>
    <div class="title">
      <strong>검색량 조회</strong> (네이버 키워드 검색량 조회)
    </div>
    <div class="search-box">
      <input
        type="text"
        class="form-control w3-text-pink"
        placeholder="검색량 조회 키워드 입력" />
      <Button
        background-color="#e91e63"
        color="white">
        조 회
      </Button>
    </div>
    <div class="descripton">
      '찾기'를 클릭하시면, 위탁 공급상품을 찾을 수 있습니다.
    </div>
    <Banner />
    <table>
      <colgroup>
        <col width="23%" />
        <col width="13%" />
        <col width="13%" />
        <col width="13%" />
        <col width="13%" />
        <col width="25%" />
      </colgroup>
      <thead>
        <th><strong>검색어</strong></th>
        <th><strong>PC</strong></th>
        <th><strong>MOBILE</strong></th>
        <th><strong>총 검색수</strong></th>
        <th><strong>쇼핑 상품수</strong></th>
        <th><strong>관 리</strong></th>
      </thead>
    </table>
    <table>
      <colgroup>
        <col width="23%" />
        <col width="13%" />
        <col width="13%" />
        <col width="13%" />
        <col width="13%" />
        <col width="25%" />
      </colgroup>
      <tbody>
        <tr
          v-for="keyword in keyword"
          :key="keyword.keywordIdx">
          <td>{{ keyword.keyword }}</td>
          <td>{{ keyword.pcSearchCnt | comma }}</td>
          <td>{{ keyword.mobileSearchCnt | comma }}</td>
          <td><strong>{{ keyword.totalSearchCnt | comma }}</strong></td>
          <td>{{ keyword.registeredGoodCnt | comma }}</td>
          <td>
            <Button
              border-color="#4A4F5A"
              color="#4A4F5A"
              font-size="12">
              조회
            </Button>
            <Button
              border-color="#ff7f00"
              color="#ff7f00"
              font-size="12">
              찾기
            </Button>
            <Button
              border-color="#81c147"
              color="#81c147"
              font-size="12">
              연관
            </Button>
            <Button
              border-color="#ff0000"
              color="#ff0000"
              font-size="12">
              이력
            </Button>
            <Button
              font-size="12">
              삭제
            </Button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Button from '~/components/Button'
import Banner from '~/components/Banner'

export default {
  components: {
    Button,
    Banner
  },
  computed: {
    ...mapState('keyword', [
      'keyword',
      'message',
      'loading'
    ])
  },
  created() {
    this.$store.dispatch('keyword/getKeywordByUser', {

    })
  },
  filters: {
    comma: function(val) {
      return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  max-width: 1220px;
  margin-top: 40px;

  .line {
    display: inline-block;
    border: 3px solid #2196F3; width: 0.1px; height: 20px;
    height: 18px;
    vertical-align: sub;
    margin-right: 5px;
  }
  .title {
    display: inline-block;
  }
  .search-box {
    display: flex;
    margin-top: 20px;
  }
  .w3-text-pink {
    width: 200px;
    height: 33px;
    font-size: 11px;
    border: 1px solid #e91e63;
    margin-right: 10px;
    &::placeholder {
      color: #bbb;
    }
  }
  .descripton {
    margin: 10px 0;
  }
  table {
    width: 100%;
    text-align: center;
    margin-bottom: 10px;
    thead {
      height: 39px;
      background-color:#F5F5F5;
      text-align: center;
      font-size: 13px;
      th {
        vertical-align: middle;
      }
    }
    tbody {
      tr {
        height: 39px;
        text-align: center;
        font-size: 13px;      
        border: 1px solid;
        &:first-child {
          border-top: 1px solid #e3e3e3;
        }
      }
      td{
        vertical-align: middle;
        border-bottom: 1px solid #e3e3e3;
        &:first-child {
          color: #e91e63;
          border-left: 1px solid #e3e3e3;
        }
        &:last-child {
          border-right: 1px solid #e3e3e3;
          text-align: right;
        }
        .button {
          margin: 0 2px;
        }
      }
    }
  }
}
</style>