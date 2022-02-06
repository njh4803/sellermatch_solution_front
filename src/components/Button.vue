<template>
  <button
    :style="{ 
      backgroundColor,
      color,
      fontSize : fontSize+'px',
      borderColor
    }"
    :class="{borderNone}"
    class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'black'
    },
    backgroundColor: {
      type: String,
      default: 'white'
    },
    borderColor: {
      type: String,
      default: ''
    },
    fontSize: {
      type: Number,
      default: 14
    },
    borderNone: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  border-radius: 4px;
  padding: 3px 10px;
  border: 1px solid;
  &.borderNone{
    border: none;
  }
}
</style>