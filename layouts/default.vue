<template>
  <main>
    <the-nav-bar />
    <section class="main-area">
      <nuxt />
    </section>
    <the-footer />
  </main>
</template>

<script>
import TheNavBar from '~/components/the-nav-bar'
import TheFooter from '~/components/the-footer'

export default {
  name: 'Default',
  components: {
    TheNavBar,
    TheFooter,
  },
}
</script>

<style lang="scss" scoped>
.main-area {
  margin: 0 auto;
  max-width: $max-width;
}
</style>
