<template>
  <section class="section-within-ads">
    <span class="section-within-ads__title">{{ category.name }}</span>

    <div
      v-if="!$fetchState.pending"
      class="section-within-ads__container row"
    >
      <google-ad
        class="section-within-ads__ad"
        :slot-id="homeVertOneAd"
      />
      <grid-column
        class="section-within-ads__posts"
        :posts="posts"
      />
      <google-ad
        class="section-within-ads__ad"
        :slot-id="homeVertTwoAd"
      />
    </div>
  </section>
</template>

<script>
import api from '@/api/index'
import GridColumn from '~/components/grids/grid-column'
import GoogleAd from '~/components/google-ad'
import { HOME_VERT_ONE_AD, HOME_VERT_TWO_AD } from '~/constants/ads'

export default {
  props: {
    category: {
      type: Object,
      required: true,
    },
  },

  components: {
    GoogleAd,
    GridColumn,
  },

  async fetch () {
    const response = await api.getPosts({ categories: this.category.id })
    this.posts = response.data
  },

  data () {
    return {
      homeVertOneAd: HOME_VERT_ONE_AD,
      homeVertTwoAd: HOME_VERT_TWO_AD,
      posts: [],
    }
  },
}
</script>

<style lang="scss" scoped>
.section-within-ads {
  display: block;

  &__title {
    @extend %h3;

    @include margin(right, 2);

    padding: $base * 2;
    background: $orange;
    color: $white;
  }

  &__container {
    @include margin(top, 6);
  }

  &__posts {
    width: 100%;

    @include breakpoint(md) {
      @include padding(left, 6);
      @include padding(right, 6);

      width: calc(100% * 2/3);
    }
  }

  &__ad {
    display: none;

    @include breakpoint(md) {
      display: block;
      width: calc(100% * 1/6);
    }
  }
}
</style>
