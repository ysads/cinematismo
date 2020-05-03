<template>
  <div>
    <the-nav-bar />
    <nuxt />
  </div>
</template>

<script>
import TheNavBar from '~/components/the_nav_bar'

export default {
  name: 'default',
  components: {
    TheNavBar
  }
}
</script>
