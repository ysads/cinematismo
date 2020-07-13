<template>
  <div
    class="hamburger"
    :class="{
      'hamburger--opened': open
    }"
    @click="$emit('click')"
  >
    <span class="hamburger-bar" />
    <span class="hamburger-bar" />
    <span class="hamburger-bar" />
  </div>
</template>

<script>
export default {
  props: {
    open: {
      type: Boolean,
      default: false,
    },
  }
}
</script>

<style lang="scss" scoped>
.hamburger {
  $hamburgerclass: &;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  transition: all 0.4s ease;

  &-bar {
    background: $white;
    border-radius: 0.125em;
    content: '';
    display: inline-block;
    height: $base/2;
    margin: $base/2;
    position: relative;
    transition: all 0.4s ease;
    width: 5*$base;
  }

  &--opened {
    #{ $hamburgerclass }-bar {
      &:nth-child(1) {
        transform: rotate(225deg) translate(-5px, -5px);
      }
      &:nth-child(2) {
        transform: scale(0);
      }
      &:nth-child(3) {
        transform: rotate(135deg) translate(-4px, 3px);
      }
    }
  }
}
</style>
