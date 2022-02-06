<template>
  <Header />
  <RouterView />
  <Bottom />
</template>

<script>
import Header from '~/components/Header'
import Bottom from '~/components/Bottom'

export default {
  components: {
    Header,
    Bottom
  }
}
</script>