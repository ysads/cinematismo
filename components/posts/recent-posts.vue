<template>
  <div class="recent-posts">
    <h4 class="recent-posts__title">
      {{ $t('title') }}
    </h4>

    <thumb-horizontal
      v-for="post in recentPosts"
      :key="post.id"
      class="recent-posts__item"
      :post="post"
    />

    <google-ad
      :slot-id="postSideAd"
    />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { POST_SIDE_AD } from '~/constants/ads'
import GoogleAd from '~/components/google-ad'
import ThumbHorizontal from '~/components/thumbs/thumb-horizontal'

export default {
  name: 'RecentPosts',

  components: {
    GoogleAd,
    ThumbHorizontal,
  },

  props: {
    excludingIds: {
      type: Array,
      default: [],
    },
  },

  data () {
    return {
      postSideAd: POST_SIDE_AD,
    }
  },

  async fetch () {
    await this.getRecentPosts(this.excludingIds)
  },

  computed: {
    ...mapState(['recentPosts']),
  },

  methods: {
    ...mapActions(['getRecentPosts']),
  },
}
</script>

<style lang="scss" scoped>
.recent-posts {
  &__title {
    @extend %h4;
  }

  &__item {
    @include padding(top, 5);
    @include padding(bottom, 5);
  }

  &__item + &__item {
    border-top: 1px solid $gray-20;
  }
}
</style>

<i18n>
{
  "pt-BR": {
    "title": "Matérias recentes"
  }
}
</i18n>
