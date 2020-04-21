<template>
  <div
    class="button"
    @click="$emit('click')"
  >
    Click me now!
  </div>
</template>

<script>
export default {
  name: 'AppButton'
}
</script>

<style lang="scss" scoped>
.button {
  border: 1px solid $orange;

  &--error {
    border-color: #ff2123;
  }
}
</style>