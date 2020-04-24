<template>
  <header class="header">
    <nuxt-link to="/">
      <img
        class="header__logo"
        src="~assets/logo.png"
        >
    </nuxt-link>
  </header>
</template>

<script>
</script>

<style lang="scss" scoped>
.header {
  @include padding(top, 8);
  @include padding(bottom, 8);

  display: flex;
  background: $white;
  flex-flow: column;
  justify-content: space-around;

  @include breakpoint(sm) {
    flex-flow: row;
  }

  &__logo {
    max-width: 220px;
    margin: 0 auto;
  }
}
</style>
