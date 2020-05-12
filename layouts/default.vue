<template>
  <main>
    <the-nav-bar />
    <section class="content">
      <nuxt />
    </section>
  </main>
</template>

<script>
import TheNavBar from '~/components/the-nav-bar'

export default {
  name: 'default',
  components: {
    TheNavBar
  }
}
</script>

<style lang="scss" scoped>
.content {
  margin: 0 auto;
  max-width: $max-width;
}
</style>
