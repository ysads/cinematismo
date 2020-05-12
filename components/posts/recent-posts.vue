<template>
  <div class="recent-posts">
    <h4 class="recent-posts__title">
      {{ $t(`${langPath}.title`) }}
    </h4>

    <post-horizontal
      class="recent-posts__item"
      v-for="id in [1, 2, 3, 4]"
      :key="id"
    />
  </div>
</template>

<script>
import PostHorizontal from '~/components/posts/post-horizontal'

export default {
  name: 'RecentPosts',

  async fetch () {
    // console.log("no fetche")
    // console.log(this)
  },

  components: {
    PostHorizontal
  },

  data () {
    return {
      langPath: __langpath,
    }
  }
}
</script>

<style lang="scss" scoped>
.recent-posts {
  &__title {
    @extend %h4;
  }

  &__item {
    @include margin(top, 5);
  }
}
</style>
