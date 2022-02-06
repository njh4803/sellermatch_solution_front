<template>
  <header>
    <Logo />
    <div class="nav nav-pills">
      <div
        v-for="nav in navigators"
        :key="nav.name"
        class="nav-item">
        <RouterLink
          :to="nav.href"
          active-class="active"
          :class="{ active: isMatch(nav.path)}"
          class="nav-link">
          {{ nav.name }}
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<script>
import Logo from '~/components/Logo'
export default {
  components: {
    Logo
  },
  data() {
    return {
      navigators: [
        {
          name: '검 색 량 조 회',
          href: '/keyword',
        },
        {
          name: '순 위 조 회',
          href: '/sales',
        },
        {
          name: '판 매 량 조 회',
          href: '/sales',
        },
        {
          name: '가 격 변 동 알 림',
          href: '/sales',
        },
        {
          name: '자 동 송 장 변 환',
          href: '/sales',
        },
        {
          name: '썸 네 일 선 호 도',
          href: '/sales',
        },
        {
          name: '상 표 권 검 색',
          href: '/sales',
        }
      ]
    }
  },
  methods: {
    isMatch(path) {
      if(!path) return false
      return path.test(this.$route.fullPath)
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  height: 50px;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  background-color: $black;
  .nav-pills {
    .nav-link {
      color: $white;
      padding: 13px 20px;
      font-size: 13px;
      border-radius: 0%;
      &:hover {
        background-color: $white;
        color: $orange;
      }
      &.active {
        background-color: $white;
        color: $orange;
      }
    }
  }
  @include media-breakpoint-down(sm) {
    .nav {
      display: none;
    }
  }
}
</style>