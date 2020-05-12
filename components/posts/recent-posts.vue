<template>
  <div class="recent-posts">
    <h4 class="recent-posts__title">
      {{ $t(`${langPath}.title`) }}
    </h4>

    <post-horizontal
      class="recent-posts__item"
      v-for="post in recentPosts"
      :key="post.id"
      :post="post"
    />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import PostHorizontal from '~/components/posts/post-horizontal'

export default {
  name: 'RecentPosts',

  props: {
    excludingIds: {
      type: Array,
      default: [],
    },
  },

  async fetch () {
    await this.getRecentPosts(this.excludingIds)
  },

  components: {
    PostHorizontal
  },

  computed: {
    ...mapState(['recentPosts'])
  },

  data () {
    return {
      langPath: __langpath,
    }
  },

  methods: {
    ...mapActions(['getRecentPosts'])
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
